import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { colors } from "../constants/style";
import { sizesType } from "../constants/types";

interface IProps {
  list: { name: string; id: string }[];
  value: { name: string; id: string };
  setValue: Dispatch<SetStateAction<{ name: string; id: string }>>;
  size: Exclude<sizesType, "lg" | "xl">;
  disabled?: boolean;
  label?: string;
}

interface IComboBox {
  $border?: string;
  $color?: string;
  $fontSize?: number;
  $padding?: string;
  $height?: number;
  $borderRadius?: string;
  $opacity?: number;
}

const variants = {
  xs: {
    fontSize: 12,
    padding: "0px 12px",
    height: 32,
  },
  sm: {
    fontSize: 16,
    padding: "4px 16px",
    height: 40,
  },
  md: {
    fontSize: 24,
    padding: "8px 24px",
    height: 48,
  },
};

const ComboBox = (props: IProps) => {
  const {
    list,
    value,
    setValue,
    size,
    disabled = false,
    label = "선택",
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <Box>
      <Select
        $border={
          value
            ? `1px solid ${colors.vividPrimaryColor} `
            : `1px solid ${colors.g000}`
        }
        $color={value ? ` ${colors.vividPrimaryColor} ` : `${colors.g100}`}
        $fontSize={variants[size].fontSize}
        $padding={variants[size].padding}
        $height={variants[size].height}
        $borderRadius={isOpened ? "8px 8px 0px 0px" : "8px"}
        $opacity={disabled ? 0.5 : 1}
        onClick={() => !disabled && setIsOpened((prev) => !prev)}
      >
        <Span>{value && value.id ? value.name : label}</Span>
        {isOpened ? (
          <AiOutlineUp size={variants[size].fontSize}></AiOutlineUp>
        ) : (
          <AiOutlineDown size={variants[size].fontSize}></AiOutlineDown>
        )}
      </Select>

      {isOpened && (
        <OptionWarpper>
          {list.map((item) => (
            <Option
              key={"combBox -" + item.name + "-" + item.id}
              onClick={() => {
                setValue(item);
                setIsOpened((prev) => !prev);
              }}
              $fontSize={variants[size].fontSize}
              $padding={variants[size].padding}
              $height={variants[size].height}
            >
              {value && value.id === item.id && (
                <span style={{ paddingRight: "8px" }}>
                  <AiOutlineCheck
                    size={variants[size].fontSize}
                  ></AiOutlineCheck>
                </span>
              )}
              {item.name}
            </Option>
          ))}
        </OptionWarpper>
      )}
    </Box>
  );
};

export default ComboBox;

const Box = styled.div`
  position: relative;
  width: fit-content;
`;

const Select = styled.div<IComboBox>`
  border: ${({ $border }) => $border};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  padding: ${({ $padding }) => $padding};
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  opacity: ${({ $opacity }) => $opacity};
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  padding-right: 32px;
`;

const OptionWarpper = styled.div`
  width: 100%;
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px ${colors.g000} inset;
  border-top: none;
  background-color: ${colors.f000};
  z-index: 20;
  :hover {
    background-color: ${colors.softPrimaryColor};
    color: #ffffff;
    border-color: ${colors.softPrimaryColor};
  }
  :last-child {
    border: none;
  }
`;

const Option = styled.div<IComboBox>`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  border-bottom: 1px solid ${colors.g000};
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  padding: ${({ $padding }) => `${$padding}`};
  display: flex;
  align-items: center;
  justify-content: start;
`;
