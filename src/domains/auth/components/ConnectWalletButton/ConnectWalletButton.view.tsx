import { css } from "@emotion/react";
import { IConnectWalletButton } from "./ConnectWalletButton.interface";
import Button from "@mui/material/Button";

const VConnectWalletButton: React.FC<IConnectWalletButton.IVProps> = ({
  // isActive,
  // signMessage,
  // onWalletConnect,
  connecting,
  wallet,
  connect,
  disconnect,
  readyToTransact,
  sendTransaction,
  // imageUrl,
  // content,
}) => {
  return (
    <div css={{ margin: "20px" }}>
      {connecting ? (
        <Button css={buttonStyle}>Connecting</Button>
      ) : wallet ? (
        <>
          <Button
            css={buttonStyle}
            onClick={() => {
              disconnect({ label: wallet.label });
            }}
          >
            Disconnect
          </Button>
          <Button
            css={buttonStyle}
            onClick={async () => {
              const ready = await readyToTransact();
              if (!ready) return;
              sendTransaction();
            }}
          >
            Transfer
          </Button>
        </>
      ) : (
        <Button
          css={buttonStyle}
          onClick={() => {
            connect();
          }}
        >
          <div css={contentStyle}>Connect Wallet</div>
        </Button>
      )}
    </div>
  );
};

export default VConnectWalletButton;

const imageStyle = css`
  width: 1.4vw;
  height: 1.4vw;
  margin-right: 5px;
`;

const buttonStyle = css`
  height: 5vh;
  width: 15vw;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6vh;
`;

const contentStyle = css`
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
`;
