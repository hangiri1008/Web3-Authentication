import { css } from "@emotion/react";
import { IButton } from "./Button.interface";

const VButton: React.FC<IButton.IVProps> = props => {
    const { name, backgroundColor, fontSize, onClick } = props;
    return (
        <button
            type="button"
            css={ButtonStyle(fontSize, backgroundColor)}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

const ButtonStyle = (fontSize: number, backgroundColor?: string) => css`
    background-color: ${!!backgroundColor ? backgroundColor : "red"};
    font-size: ${fontSize}px;
    width: 100px;
    height: 50px;
`;

export default VButton;
