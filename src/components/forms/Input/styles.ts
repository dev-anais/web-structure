import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@styles/colors";

export const input = (
  size: string,
  isError: boolean,
  layout: SerializedStyles | undefined
) => css`
  ${getInput()}
  ${getSize(size)}
  ${isError ? getErrorStyle() : getStyle()}
  ${layout}
`;

const getInput = () => css`
  width: 100%;
  border-radius: 8px;
`;

const getSize = (size: string) => {
  switch (size) {
    case "large":
      return css`
        height: 48px;
        padding: 18px 46.5px;
      `;
    case "medium":
      return css`
        height: 36px;
        padding: 14px 34px;
      `;
    case "small":
      return css`
        height: 24px;
        padding: 10px 24px;
      `;
  }
};

const getStyle = () => {
  return css`
    border: 1px solid ${COLORS.PRIMARY};
  `;
};

const getErrorStyle = () => {
  return css`
    border: 1px solid ${COLORS.ERROR};
  `;
};
