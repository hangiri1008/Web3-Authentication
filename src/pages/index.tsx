import ConnectWalletButton from "@domains/auth/components/ConnectWalletButton";
import type { NextPage } from "next";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider: any) => new Web3Provider(provider);

const Home: NextPage = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ConnectWalletButton walletType="ledgis" />
      <ConnectWalletButton walletType="metamask" />
      <ConnectWalletButton walletType="coinbase" />
    </Web3ReactProvider>
  );
};

export default Home;
