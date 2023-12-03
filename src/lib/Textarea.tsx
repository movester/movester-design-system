import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import Typography from "./Typography";

interface IProps {
  value: string | number;
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  readonly?: boolean;
}

const Textarea = (props: PropsWithChildren<IProps>) => {
  const {
    value,
    setValue,
    placeholder,
    disabled = false,
    maxLength,
    readonly = false,
  } = props;
  return (
    <Box>
      <TextareaBox
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readonly}
        disabled={disabled}
      ></TextareaBox>
      {maxLength && (
        <TextIndicator>
          <Typography variants="body2" color={colors.g000}>
            {value.toString().length + "/" + maxLength}
          </Typography>
        </TextIndicator>
      )}
    </Box>
  );
};
export default Textarea;

const Box = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

const TextareaBox = styled.textarea`
  border: 1px solid ${colors.g000};
  padding: 16px;
  outline: none;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  resize: none;
`;

const TextIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
