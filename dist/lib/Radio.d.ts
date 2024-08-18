import { PropsWithChildren } from "react";
import React from "react";
interface IProps {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Radio: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Radio;
