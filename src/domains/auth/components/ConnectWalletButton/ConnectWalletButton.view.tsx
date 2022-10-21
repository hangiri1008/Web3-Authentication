import { css } from "@emotion/react";
import { IConnectWalletButton } from "./ConnectWalletButton.interface";
import Button from "@mui/material/Button";

const VConnectWalletButton: React.FC<IConnectWalletButton.IVProps> = ({
  onWalletConnect,
  imageUrl,
  content,
}) => {
  return (
    <div css={{ margin: "20px" }}>
      <Button css={buttonStyle} onClick={onWalletConnect}>
        <div css={contentStyle}>
          <img src={imageUrl} css={imageStyle} alt="icon" />
          {content}
        </div>
        <div style={{ fontSize: "0.5vw" }}>{/* {address} */}</div>
      </Button>
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
`;
