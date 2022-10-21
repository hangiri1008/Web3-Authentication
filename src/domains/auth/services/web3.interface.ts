export interface IProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

export interface IGasPrices {
  lowGasPrice: string;
  propseGasPrice: string;
  fastGasPrice: string;
}

export interface IRequestDepositBridgeParams {
  address: string;
  accountName: string;
  amount: string;
  symbol: string;
}

export interface IWeb3Service {
  connectMetamask(): Promise<boolean | string | undefined>;
  connectCoinbase(): Promise<boolean | string | undefined>;
  getEthBalance(address: string, unit: string): Promise<number>;
  validateEthAddress(address: string): boolean;
  checkApproval(address: string, unit: string): Promise<boolean>;
  getGasFee(): Promise<IGasPrices>;
  approvalToken(address: string, unit: string): Promise<boolean>;
  requestDepositBridge(
    requestDepositBridgeParams: IRequestDepositBridgeParams
  ): Promise<boolean>;
}
