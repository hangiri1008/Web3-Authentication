import { css } from "@emotion/react";
import { useState } from "react";
import { IKaiKasConnectButton } from "./KaiKasConnectButton.interface";
import VKaiKasConnectButton from "./KaiKasConnectButton.view";

declare global {
  interface Window {
    klaytn: any;
  }
  interface klaytn {}
}

const KaiKasConnectButton: React.FC<IKaiKasConnectButton.IProps> = () => {
  const [user, setUser] = useState();

  const onWalletConnect = async () => {
    if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
      // Kaikas user detected. You can now use the provider.
      const provider = window["klaytn"];
      try {
        const accounts = await window.klaytn.enable();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onSendTransaction = async () => {
    window.klaytn.sendAsync({
      method: "klay_sendTransaction",
      params: [
        {
          gas: "0x2710",
          to: "0x2710",
          from: window.klaytn.selectedAddress,
          value: "0xff",
        },
      ],
      from: window.klaytn.selectedAddress,
    });
  };

  //   const send = async () => {
  //     const addr = "0x6F8bA1EEDa3FEA14162864F763cF97E7E02fE30F";
  //     const price = 50;

  //     const gas = 80000000;
  //     caver.klay
  //       .sendTransaction({
  //         from: klaytn.selectedAddress,
  //         to: addr,
  //         value: caver.utils.toPeb(price.toString(), "KLAY"),
  //         gas: gas,
  //       })
  //       .then(function (receipt) {});
  //   };

  return <VKaiKasConnectButton onWalletConnect={onWalletConnect} />;
};

export default KaiKasConnectButton;
