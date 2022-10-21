import { css } from "@emotion/react";
import Image from "next/image";
import { ILayout } from "./Layout.interface";

const VLayout: React.FC<ILayout.IVProps> = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <div css={headerStyle}>
        <h2>Connect Wallet</h2>
      </div>
      <div css={mainStyle}>{children}</div>
      <div css={footerStyle}>
        <h2>WEB3 Authentication</h2>
      </div>
    </div>
  );
};

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const headerStyle = css`
  width: 100%;
  height: 10%;
  background-color: #000;
  padding: 30px;
  color: #fff;
  text-align: center;
`;

const mainStyle = css`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const footerStyle = css`
  width: 100%;
  height: 10%;
  background-color: #000;
  padding: 30px;
  color: #fff;
  text-align: center;
`;

export default VLayout;
