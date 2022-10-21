export namespace IConnectWalletButton {
  export interface IProps {
    walletType: string;
  }
  export interface IVProps {
    onWalletConnect: () => void;
    imageUrl: string;
    content: string;
  }
}
