// import { injected } from "@domains/auth/services/connectors";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { IConnectWalletButton } from "./ConnectWalletButton.interface";
import VConnectWalletButton from "./ConnectWalletButton.view";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";
///
import { init, useConnectWallet, useSetChain } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();

const infuraKey = "";

init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum",
      rpcUrl: "https://mainnet.infura.io/v3/${infuraKey}",
    },
    {
      id: "0x4",
      token: "rETH",
      label: "Rinkeby",
      rpcUrl: "https://rinkeby.infura.io/v3/${infuraKey}",
    },
    {
      id: "0xaa36a7",
      token: "SepoliaETH",
      label: "Sepolia",
      rpcUrl: "https://nunki.htznr.fault.dev/rpc",
    },
  ],
});

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const ConnectWalletButton: React.FC<IConnectWalletButton.IProps> = ({
  walletType,
}) => {
  // const {
  //   connector,
  //   library,
  //   chainId,
  //   account,
  //   active,
  //   error,
  //   activate,
  //   deactivate,
  // } = useWeb3React();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  const [balance, setBalance] = useState<number | null>();
  const [blockNumber, setBlockNumber] = useState<number | null>();
  const [activeConnector, setActiveConnector] = useState();
  const [provider, setProvider] = useState<any>();

  // const contract = {
  //   address: "0xe138921836cA7A88CBd99Ab280a64f51563691b7",
  //   abi: [
  //     {
  //       inputs: [{ internalType: "uint256", name: "count_", type: "uint256" }],
  //       name: "add",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "count",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //   ],
  // };

  useEffect(() => {
    if (!wallet?.provider) {
      setProvider(null);
    } else {
      let provider = new ethers.providers.Web3Provider(wallet.provider, "any");
      setProvider(provider);
    }
  }, [wallet]);

  const readyToTransact = async () => {
    if (!wallet) {
      const walletSelected = await connect();
      if (!walletSelected) return false;
    }

    if (connectedChain) {
      console.log("connectedChain", connectedChain.id);
      console.log("connectedChain id", connectedChain.id);
    }

    if (connectedChain && connectedChain.id === "0xaa36a7") {
      // prompt user to switch to Rinkeby for test
      await setChain({ chainId: "0xaa36a7" });
    }

    return true;
  };

  const sendTransaction = async () => {
    // if (!toAddress) {
    //   alert("An Ethereum address to send Eth to is required.");
    //   return;
    // }

    const signer = provider.getUncheckedSigner();

    await signer.sendTransaction({
      to: "0x1c967a3359601a94ccf4cf018c7a1fa043955402",
      value: 100000000000000,
    });
  };

  // const onWalletConnect = async () => {
  // if (connector) {
  //   deactivate();
  //   return;
  // }
  // if (typeof window.ethereum !== "undefined") {
  //   try {
  //     await activate(injected);
  //     const newContract = new ethers.Contract(
  //       contract.address,
  //       contract.abi,
  //       library?.provider
  //     );
  //     const count = await newContract.count();
  //     console.log(count);
  //     return;
  //   } catch (err) {
  //     alert(err);
  //   }
  // }
  // window.open("https://metamask.io/download.html");
  // };

  // useEffect(() => {
  //   if (library) {
  //     let stale = false;
  //     library
  //       .getBlockNumber()
  //       .then((response: any) => {
  //         if (!stale) {
  //           setBlockNumber(response);
  //         }
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //         if (!stale) {
  //           setBlockNumber(null);
  //         }
  //       });
  //     return () => {
  //       stale = true;
  //       setBlockNumber(null);
  //     };
  //   }
  // }, [library, chainId]);

  // useEffect(() => {
  //   if (library && account) {
  //     let stale = false;

  //     library
  //       .getBalance(account)
  //       .then((response: any) => {
  //         if (!stale) {
  //           setBalance(library.utils.fromWei(response, "ether"));
  //         }
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //         if (!stale) {
  //           setBalance(null);
  //         }
  //       });

  //     return () => {
  //       stale = true;
  //       setBlockNumber(null);
  //     };
  //   }
  // }, [library, account, chainId]);

  // const signMessage = () => {
  //   library.sign("Hello Terminal!", account).then(console.log);
  // };

  return (
    <VConnectWalletButton
      // isActive={active}
      // onWalletConnect={onWalletConnect}
      // signMessage={signMessage}
      connecting={connecting}
      wallet={wallet}
      connect={connect}
      disconnect={disconnect}
      readyToTransact={readyToTransact}
      sendTransaction={sendTransaction}
      // imageUrl={
      //   walletType === "metamask"
      //     ? "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/metamask.PNG"
      //     : walletType === "coinbase"
      //     ? "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/Coinbase-dapp-wallet-logo.PNG"
      //     : "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/Ledgis_256.png"
      // }
      // content={
      //   walletType === "metamask"
      //     ? "MetaMask"
      //     : walletType === "coinbase"
      //     ? "Coinbase"
      //     : "Ledgis"
      // }
    />
  );
};

export default ConnectWalletButton;
