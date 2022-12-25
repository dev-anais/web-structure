import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@styles/colors";

export const button = (
  size: string,
  styleType: string,
  layout: SerializedStyles | undefined
) => css`
  ${getButton()}
  ${getSize(size)}
  ${getStyleType(styleType)}
  ${layout}
`;

const getButton = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

const getSize = (size: string) => {
  switch (size) {
    case "large":
      return css`
        height: 74px;
        padding: 18px 46.5px;
        border-radius: 8px;
        font-size: 20px;
        line-height: 22px;
        min-width: 100px;
      `;
    case "medium":
      return css`
        height: 56px;
        padding: 14px 34px;
        border-radius: 8px;
        font-size: 18px;
        line-height: 22px;
        min-width: 87px;
      `;
    case "small":
      return css`
        height: 44px;
        padding: 10px 24px;
        border-radius: 6px;
        font-size: 12px;
        line-height: 20px;
        min-width: 60px;
      `;
    case "xSmall":
      return css`
        height: 32px;
        padding: 10px 16px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 18px;
        min-width: 54px;
      `;
  }
};

const getStyleType = (type: string) => {
  switch (type) {
    case "primary":
      return css`
        background-color: ${COLORS.PRIMARY};
        color: ${COLORS.WHITE};
        &:hover {
          background-color: ${COLORS.PRIMARY_HOVER};
        }
        &:active {
          background-color: ${COLORS.PRIMARY_ACTIVE};
        }
      `;

    case "secondary":
      return css`
        background-color: ${COLORS.SECONDARY};
        color: ${COLORS.WHITE};
        &:hover {
          background-color: ${COLORS.SECONDARY_HOVER};
        }
        &:active {
          background-color: ${COLORS.SECONDARY_ACTIVE};
        }
      `;

    case "error":
      return css`
        background-color: ${COLORS.ERROR};
        color: ${COLORS.WHITE};
        &:hover {
          background-color: ${COLORS.ERROR_HOVER};
        }
        &:active {
          background-color: ${COLORS.ERROR_ACTIVE};
        }
      `;
  }
};
