import { PropsWithChildren } from "react";
import { typographyType } from "../constants/types";
interface IProps {
    variants?: typographyType;
    color?: string;
}
declare const Typography: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Typography;
