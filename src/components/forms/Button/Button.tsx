import { SerializedStyles } from "@emotion/react";
import { PropsWithChildren } from "react";
import * as styles from "./styles";

type StyleType = "primary" | "secondary" | "error";

type Size = "large" | "medium" | "small" | "xSmall";

type ButtonProps = {
  css?: SerializedStyles;
  size?: Size;
  styleType: StyleType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  css,
  children,
  size = "small",
  styleType,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button css={styles.button(size, styleType, css)} {...props}>
      {children}
    </button>
  );
};

export default Button;
