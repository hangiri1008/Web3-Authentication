import { injected } from "@domains/auth/services/connectors";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { IConnectWalletButton } from "./ConnectWalletButton.interface";
import VConnectWalletButton from "./ConnectWalletButton.view";

const ConnectWalletButton: React.FC<IConnectWalletButton.IProps> = ({
  walletType,
}) => {
  const {
    connector,
    library,
    chainId,
    account,
    active,
    error,
    activate,
    deactivate,
  } = useWeb3React();
  const [balance, setBalance] = useState("");

  const onWalletConnect = async () => {
    // console.log(active);
    // if (active) {
    //   deactivate();
    //   return;
    // }
    try {
      await activate(injected, (error) => {
        // 크롬 익스텐션 없을 경우 오류 핸들링
        if ("/No Ethereum provider was found on window.ethereum/" + error)
          throw new Error("Metamask 익스텐션을 설치해주세요");
      });
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };

  useEffect(() => {
    if (account) {
      library
        ?.getBalance(account)
        .then((result: any) => setBalance(result._hex));
    }
  }, [account, library]);

  return (
    <VConnectWalletButton
      isActive={active}
      onWalletConnect={onWalletConnect}
      balance={balance}
      imageUrl={
        walletType === "metamask"
          ? "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/metamask.PNG"
          : walletType === "coinbase"
          ? "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/Coinbase-dapp-wallet-logo.PNG"
          : "https://ibct-wallet-token-img.s3.ap-northeast-2.amazonaws.com/Ledgis_256.png"
      }
      content={
        walletType === "metamask"
          ? "MetaMask"
          : walletType === "coinbase"
          ? "Coinbase"
          : "Ledgis"
      }
    />
  );
};

export default ConnectWalletButton;
