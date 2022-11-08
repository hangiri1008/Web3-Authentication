export namespace IConnectWalletButton {
  export interface IProps {
    walletType?: string;
  }
  export interface IVProps {
    // isActive: boolean;
    // onWalletConnect: () => void;
    // signMessage: () => void;
    connecting: any;
    wallet: any;
    connect: any;
    disconnect: any;
    readyToTransact?: any;
    sendTransaction?: any;
    // imageUrl: string;
    // content: string;
  }
}
