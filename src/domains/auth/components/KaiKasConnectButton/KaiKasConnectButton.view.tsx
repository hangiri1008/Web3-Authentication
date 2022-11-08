import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { IKaiKasConnectButton } from "./KaiKasConnectButton.interface";

const VKaiKasConnectButton: React.FC<IKaiKasConnectButton.IVProps> = ({
  onWalletConnect,
}) => {
  return (
    <Button css={buttonStyle} onClick={onWalletConnect}>
      Connect
    </Button>
  );
};

export default VKaiKasConnectButton;

const buttonStyle = css`
  height: 5vh;
  width: 15vw;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6vh;
`;
