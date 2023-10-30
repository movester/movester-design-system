import { PropsWithChildren } from "react";
import { sizesType, variantsType } from "../constants/types";
interface IProps {
    variants?: variantsType;
    size: Exclude<sizesType, "xl">;
    disabled?: boolean;
    width?: number;
    onClick?: () => void;
}
declare const Button: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Button;
