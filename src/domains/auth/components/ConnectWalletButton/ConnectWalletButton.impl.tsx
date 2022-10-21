import { injected } from "@domains/auth/services/connectors";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { IConnectWalletButton } from "./ConnectWalletButton.interface";
import VConnectWalletButton from "./ConnectWalletButton.view";
import { MetaMaskInpageProvider } from "@metamask/providers";
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

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
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected);
        return;
      } catch (err) {
        alert(err);
      }
    }
    window.open("https://metamask.io/download.html");
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
