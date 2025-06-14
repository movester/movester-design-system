import React from 'react';
import { View } from 'react-native';
interface IProps {
    flexDirection?: 'column' | 'row';
    gap?: number;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    padding?: number;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    borderRadius?: number;
    onClick?: () => void;
}
declare const Box: React.ForwardRefExoticComponent<IProps & {
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
export default Box;
