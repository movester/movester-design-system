import { styled } from "styled-components";
import { colors } from "../constants/style";

interface IProps {
  color?: string;
}

const Divider = (props: IProps) => {
  const { color = colors.g200 } = props;

  return <Box style={{ backgroundColor: `${color}` }}></Box>;
};

export default Divider;

const Box = styled.div`
  height: 1px;
`;
