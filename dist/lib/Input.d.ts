import { PropsWithChildren } from "react";
interface IProps {
    value: string | number;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    invisible?: boolean;
    onClear?: () => void;
}
declare const Input: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Input;
