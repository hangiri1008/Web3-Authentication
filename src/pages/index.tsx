import type { NextPage } from "next";
import { Layout } from "@common/components";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import ConnectWalletButton from "@domains/auth/components/ConnectWalletButton";
import KaiKasConnectButton from "@domains/auth/components/KaiKasConnectButton/KaiKasConnectButton.impl";

const getLibrary = (provider: any) => new Web3Provider(provider);

const Home: NextPage = () => {
  return (
    <Layout>
      <Web3ReactProvider getLibrary={getLibrary}>
        {/* <ConnectWalletButton /> */}
        <KaiKasConnectButton />
      </Web3ReactProvider>
    </Layout>
  );
};

export default Home;
