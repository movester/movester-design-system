import { PropsWithChildren } from "react";
interface IProps {
    flexDirection?: "column" | "row";
    gap?: number;
    justifyContent?: "center" | "start" | "end" | "space-between";
    alignItems?: "center" | "start" | "end";
    padding?: number | string;
    width?: number | string;
    height?: number | string;
    display?: "flex" | "block" | "inline" | "grid";
    overflow?: "scroll" | "hidden";
    backgroundColor?: string;
    border?: string;
    borderRadius?: number;
    gridTemplateColumns?: string;
    boxSahdow?: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    ref?: any;
}
declare const Box: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Box;
