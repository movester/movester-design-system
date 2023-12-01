import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { sizesType, variantsType } from "../constants/types";
import { colors } from "../constants/style";

interface IProps {
  variants?: variantsType;
  size: Exclude<sizesType, "xl">;
  disabled?: boolean;
  width?: number;
  onClick?: () => void;
}

interface IButton {
  $backgroundColor: string;
  $color: string;
  $border: string;
  $height: number;
  $fontSize: number;
  $width: number | undefined;
  $disabled: boolean;
}

const variantsColors: {
  [key in variantsType]: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
} = {
  primary: {
    backgroundColor: colors.softPrimaryColor,
    textColor: colors.f000,
    borderColor: "transaparent",
  },
  secondary: {
    backgroundColor: colors.f000,
    textColor: colors.vividPrimaryColor,
    borderColor: colors.vividPrimaryColor,
  },
};

const sizes: {
  [key in Exclude<sizesType, "xl">]: {
    height: number;
    fontSize: number;
  };
} = {
  xs: {
    height: 32,
    fontSize: 12,
  },
  sm: {
    height: 48,
    fontSize: 16,
  },
  md: {
    height: 60,
    fontSize: 24,
  },
  lg: {
    height: 80,
    fontSize: 36,
  },
};

const Button = (props: PropsWithChildren<IProps>) => {
  const {
    variants = "primary",
    children,
    size,
    disabled = false,
    width,
    onClick,
  } = props;

  return (
    <Box
      $backgroundColor={variantsColors[variants].backgroundColor}
      $color={variantsColors[variants].textColor}
      $border={`2px solid ${variantsColors[variants].borderColor}`}
      $height={sizes[size].height}
      $fontSize={sizes[size].fontSize}
      $width={width}
      $disabled={disabled}
      onClick={onClick}
      className="ButtonComponent"
    >
      {children ? children : "확인"}
    </Box>
  );
};

export default Button;

const Box = styled.button<IButton>`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-weight: bold;
  outline: none;
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  box-sizing: border-box;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  height: ${(props) => `${props.$height}px`};
  font-size: ${(props) => `${props.$fontSize}px`};
  border: ${(props) => `${props.$border}}`};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
`;
