import { css } from "@emotion/react";
import Image from "next/image";
import { ILayout } from "./Layout.interface";

const VLayout: React.FC<ILayout.IVProps> = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <h2>지갑 연결</h2>
      </header>
      <main css={mainStyle}>{children}</main>
      <footer css={footerStyle}>
        <h2>Web3-Authentication</h2>
      </footer>
    </div>
  );
};

const layoutStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const headerStyle = css`
  width: 100%;
  height: 10%;
  padding: 5px;
  text-align: center;
`;

const mainStyle = css`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const footerStyle = css`
  width: 100%;
  height: 10%;
  background-color: #000;
  padding: 30px;
  text-align: center;
  color: #fff;
`;

export default VLayout;
