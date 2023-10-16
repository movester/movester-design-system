import Box from "./Box";
import Typography from "./Typography";
import { PropsWithChildren } from "react";
import { colors } from "../constants/style";
import { ImCheckmark } from "react-icons/im";

interface IProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = (props: PropsWithChildren<IProps>) => {
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
        borderRadius={4}
        border={
          isChecked ? "1px solid transparent" : `1px solid ${colors.g100}`
        }
        backgroundColor={isChecked ? colors.softPrimaryColor : colors.f000}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => setIsChecked((prev: boolean) => !prev)}
      >
        {isChecked && <ImCheckmark color={colors.f000} size={12}></ImCheckmark>}
      </Box>

      <Typography variants="body2">{children}</Typography>
    </Box>
  );
};

export default CheckBox;
