export namespace IConnectWalletButton {
  export interface IProps {
    walletType: string;
  }
  export interface IVProps {
    isActive: boolean;
    onWalletConnect: () => void;
    balance: string;
    imageUrl: string;
    content: string;
  }
}
