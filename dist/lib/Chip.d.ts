import { PropsWithChildren } from "react";
interface IProps {
    variants?: "primary" | "secondary";
    size?: "sm" | "md";
}
declare const Chip: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Chip;
