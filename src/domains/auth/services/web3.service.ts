import {
  IWeb3Service,
  IGasPrices,
  IProviderRpcError,
  IRequestDepositBridgeParams,
} from "./web3.interface";
import Web3 from "web3";
import { Unit } from "web3-utils";
import axios from "axios";

class Web3Service implements IWeb3Service {
  private static instance: Web3Service;

  public provider: any;
  public _web3: Web3;

  constructor() {
    const httpProvider = new Web3.providers.HttpProvider(
      process.env.NEXT_PUBLIC_ETH_ENDPOINT || ""
    );
    this._web3 = new Web3(httpProvider);
  }

  public static get Instance(): Web3Service {
    return this.instance || (this.instance = new this());
  }

  public async connectMetamask(): Promise<any> {
    const extension: any | undefined = (window as any).ethereum;

    if (extension === undefined) return false;

    if (extension.providers) {
      for (const provider of extension.providers) {
        if (provider.isMetaMask && provider.isMetaMask === true) {
          this.provider = provider;
        }
      }
    } else if (extension.isMetaMask === true) {
      this.provider = extension;
    } else {
      return false;
    }

    try {
      const result = await this.provider.enable();
      const address = result[0];
      return { ethereumAddress: address };
    } catch (error: IProviderRpcError | any) {
      console.log("error", error);
      if (error.code === 4001) {
        alert("you are not allowed to address");
      }
      return undefined;
    }
  }

  public async connectCoinbase(): Promise<any> {
    const extension: any | undefined = (window as any).ethereum;

    if (extension === undefined) return false;

    if (extension.providers) {
      for (const provider of extension.providers) {
        if (provider.isCoinbaseWallet && provider.isCoinbaseWallet === true) {
          this.provider = provider;
        }
      }
    } else if (extension.isCoinbase === true) {
      this.provider = extension;
    } else {
      return false;
    }

    try {
      await this.provider.enable();
      const address = await this.provider.request({
        method: "eth_requestAccounts",
      });
      return { ethereumAddress: address[0] };
    } catch (error: IProviderRpcError | any) {
      // if (error.message === "User denied account authorization") {
      alert(error.message);
      return undefined;
      // }
    }
  }

  private async setContract(
    unit: string
  ): Promise<{ contract: any; weiType: Unit; tokenAddress: string }> {
    const contractAbi = [
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
          {
            name: "_spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_spender",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    let tokenAddress: string = "";
    let weiType: Unit = "ether";

    if (unit === "USDT") {
      tokenAddress = process.env.NEXT_PUBLIC_USDT_ADDRESS || "";
      weiType = "mwei";
    }
    if (unit === "USDC") {
      tokenAddress = process.env.NEXT_PUBLIC_USDC_ADDRESS || "";
      weiType = "mwei";
    }
    if (unit === "WBTC") {
      tokenAddress = process.env.NEXT_PUBLIC_WBTC_ADDRESS || "";
      weiType = "nano";
    }

    if (unit === "DAI")
      tokenAddress = process.env.NEXT_PUBLIC_DAI_ADDRESS || "";
    if (unit === "ORC")
      tokenAddress = process.env.NEXT_PUBLIC_ORC_ADDRESS || "";

    const contract = new this._web3.eth.Contract(
      JSON.parse(JSON.stringify(contractAbi)),
      tokenAddress
    );
    return { contract, weiType, tokenAddress };
  }

  public async getEthBalance(address: string, unit: string): Promise<number> {
    try {
      if (unit === "ETH") {
        const balance = await this._web3.eth.getBalance(address);
        const parseBalance = await this._web3.utils.fromWei(balance, "ether");
        return Number(parseFloat(parseBalance).toFixed(8));
      }

      const { contract, weiType } = await this.setContract(unit);

      const balance = await contract.methods.balanceOf(address).call();

      const parseBalance = await this._web3.utils.fromWei(balance, weiType);

      return unit === "WBTC" ? Number(parseBalance) * 10 : Number(parseBalance);
    } catch (error) {
      console.log(error);
      throw new Error("rpc call error");
    }
  }

  public validateEthAddress(address: string): boolean {
    const validateResult = this._web3.utils.isAddress(address);
    return validateResult;
  }

  public async checkApproval(address: string, unit: string): Promise<boolean> {
    try {
      if (unit === "ETH") return true;
      const { contract } = await this.setContract(unit);
      const allowanceBalance = await contract.methods
        .allowance(address, process.env.NEXT_PUBLIC_BRIDGE_ADDRESS)
        .call();
      if (Number(allowanceBalance) > 0) {
        return true;
      }
      return false;
    } catch (error: any) {
      return false;
    }
  }

  public async getGasFee(): Promise<IGasPrices> {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ETHERSCAN_ENDPOINT}?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`
    );
    if (response.data.status === "0") {
      throw new Error("Max rate limit reached");
    }
    const responseReuslt = response.data.result;

    const gasFee = await this._web3.utils.fromWei(
      responseReuslt.FastGasPrice,
      "ether"
    );
    return {
      lowGasPrice: responseReuslt.SafeGasPrice,
      propseGasPrice: responseReuslt.ProposeGasPrice,
      fastGasPrice: gasFee,
    };
  }

  public async approvalToken(address: string, unit: string): Promise<boolean> {
    try {
      const { contract, tokenAddress } = await this.setContract(unit);
      const ledgisEthAddress = process.env.NEXT_PUBLIC_BRIDGE_ADDRESS || "";

      const nonce = await this._web3.eth.getTransactionCount(address);
      const totalSupply = await contract.methods.totalSupply().call();

      const transactionParameters = {
        nonce: this._web3.utils.toHex(nonce),
        from: address,
        to: tokenAddress,
        value: "0x00",
        data: contract.methods
          .approve(ledgisEthAddress, totalSupply)
          .encodeABI(),
        chainId: this._web3.utils.toHex(
          process.env.NEXT_PUBLIC_ETH_CHAIN_ID || ""
        ),
      };

      await this.provider.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return true;
    } catch (error: any) {
      alert(`rpc error: ${error.message}`);
      window.location.reload();
      return false;
    }
  }

  public async requestDepositBridge(
    requestDepositBridgeParams: IRequestDepositBridgeParams
  ): Promise<boolean> {
    const { address, accountName, amount, symbol } = requestDepositBridgeParams;

    try {
      const { weiType } = await this.setContract(symbol);
      let parseAmount = this._web3.utils.toWei(amount, weiType);
      let value: string = this._web3.utils.toHex(
        this._web3.utils.toBN(this._web3.utils.toWei("0.002", "ether"))
      );

      if (symbol === "WBTC")
        parseAmount = String(
          Number(this._web3.utils.toWei(String(amount), weiType)) * 10
        );

      if (symbol === "ETH") {
        parseAmount = this._web3.utils.toWei(
          String(Number(amount) - 0.002),
          "ether"
        );
        value = this._web3.utils.toHex(
          this._web3.utils.toBN(this._web3.utils.toWei(amount, "ether"))
        );
      }

      const nonce = await this._web3.eth.getTransactionCount(address);

      const bridgeAddress = process.env.NEXT_PUBLIC_BRIDGE_ADDRESS;
      const bridgeAbi = [
        {
          inputs: [
            {
              internalType: "string",
              name: "ledgisAccount",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "requestDeposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
      const bridgeContract = new this._web3.eth.Contract(
        JSON.parse(JSON.stringify(bridgeAbi)),
        bridgeAddress
      );

      const data = bridgeContract.methods
        .requestDeposit(accountName, symbol, this._web3.utils.toBN(parseAmount))
        .encodeABI();

      const transactionParameters = {
        nonce: this._web3.utils.toHex(nonce),
        from: address,
        to: bridgeAddress,
        data,
        chainId: process.env.NEXT_PUBLIC_ETH_CHAIN_ID,
        value,
      };
      await this.provider.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      window.location.reload();
      return true;
    } catch (error: any) {
      alert(error.message);
      window.location.reload();
      return false;
    }
  }
}

export default Web3Service.Instance;
