import { SerializedStyles } from "@emotion/react";
import * as styles from "./styles";
import { Size } from "./types";

type InputProps = {
  size: Size;
  css?: SerializedStyles;
  isError?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = ({ css, size, isError = false, ...props }: InputProps) => {
  return <input css={styles.input(size, isError, css)} {...props} />;
};

export default Input;
