import { PropsWithChildren } from "react";
interface IProps {
    value: string | number;
    setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    readonly?: boolean;
}
declare const Textarea: (props: PropsWithChildren<IProps>) => import("react/jsx-runtime").JSX.Element;
export default Textarea;
