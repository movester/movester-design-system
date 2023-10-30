import { Dispatch, SetStateAction } from "react";
import { sizesType } from "../constants/types";
interface IProps {
    list: {
        name: string;
        id: string;
    }[];
    value: {
        name: string;
        id: string;
    };
    setValue: Dispatch<SetStateAction<{
        name: string;
        id: string;
    }>>;
    size: Exclude<sizesType, "lg" | "xl">;
    disabled?: boolean;
    label?: string;
}
declare const ComboBox: (props: IProps) => import("react/jsx-runtime").JSX.Element;
export default ComboBox;
