import { MouseEventHandler } from "react";

export namespace IButton {
    export interface IProps {
        name: string;
        fontSize: number;
        backgroundColor?: string;
        onClick?: () => void;
    }
    export interface IVProps extends IProps {}
}
