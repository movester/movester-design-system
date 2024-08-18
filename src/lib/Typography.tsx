import { PropsWithChildren } from "react";
import { typographyType } from "../constants/types";

interface IProps {
  variants?: typographyType;
  color?: string;
}

const variantsProperties: {
  [key in typographyType]: { fontSize: number; fontWeight: number };
} = {
  title1: {
    fontSize: 36,
    fontWeight: 800,
  },
  heading1: {
    fontSize: 24,
    fontWeight: 800,
  },
  heading2: {
    fontSize: 16,
    fontWeight: 800,
  },
  heading3: {
    fontSize: 14,
    fontWeight: 800,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
  },
  body2: {
    fontSize: 14,
    fontWeight: 500,
  },
  body3: {
    fontSize: 12,
    fontWeight: 500,
  },
  caption: {
    fontSize: 10,
    fontWeight: 500,
  },
};

const Typography = (props: PropsWithChildren<IProps>) => {
  const { variants = "body2", color, children } = props;

  return (
    <span
      style={{
        fontSize: `${variantsProperties[variants].fontSize}px`,
        fontWeight: `${variantsProperties[variants].fontWeight}`,
        color: `${color}`,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
