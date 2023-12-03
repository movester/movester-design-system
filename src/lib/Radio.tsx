import Box from "./Box";
import Typography from "./Typography";
import { PropsWithChildren } from "react";
import { colors } from "../constants/style";
import React from "react";

interface IProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Radio = (props: PropsWithChildren<IProps>) => {
  const { isChecked, setIsChecked, children = "동의합니다." } = props;
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      gap={8}
    >
      <Box
        width={16}
        height={16}
        borderRadius={16}
        border={`1px solid ${colors.g100}`}
        backgroundColor={colors.f000}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => setIsChecked((prev: boolean) => !prev)}
      >
        {isChecked && (
          <Box
            width={8}
            height={8}
            borderRadius={8}
            backgroundColor={colors.softPrimaryColor}
          ></Box>
        )}
      </Box>

      <Typography variants="body2">{children}</Typography>
    </Box>
  );
};

export default Radio;
