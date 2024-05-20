import { Theme, css } from "@emotion/react";

const generateFontStyle = ({
  size,
  weight,
  lineHeight,
  letterSpacing,
}: {
  size: string;
  weight: number;
  lineHeight: string;
  letterSpacing: string;
}) => css`
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;

export const FONT_STYLES = {
  /**
   * * H1
   */
  H1: generateFontStyle({ size: "20px", weight: 700, lineHeight: "100%", letterSpacing: "-0.4px" }),
  H2: generateFontStyle({
    size: "18px",
    weight: 700,
    lineHeight: "100%",
    letterSpacing: "-0.36px",
  }),
  H3: generateFontStyle({
    size: "16px",
    weight: 700,
    lineHeight: "100%",
    letterSpacing: "-0.32px",
  }),
  H4: generateFontStyle({
    size: "14px",
    weight: 500,
    lineHeight: "100%",
    letterSpacing: "-0.28px",
  }),

  /**
   * * BODY, CAPTION
   * * R: Regular
   */
  BODY1_R16: generateFontStyle({
    size: "16px",
    weight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.48px",
  }),
  BODY1_R14: generateFontStyle({
    size: "14px",
    weight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.42px",
  }),
  CAPTION_R12: generateFontStyle({
    size: "12px",
    weight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.36px",
  }),

  BODY2_R16: generateFontStyle({
    size: "16px",
    weight: 400,
    lineHeight: "150%",
    letterSpacing: "-0.48px",
  }),
  BODY2_R14: generateFontStyle({
    size: "14px",
    weight: 400,
    lineHeight: "150%",
    letterSpacing: "-0.42px",
  }),

  /**
   * * BODY
   * * M: Medium
   */
  BODY3_M16: generateFontStyle({
    size: "16px",
    weight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.48px",
  }),
  BODY3_M14: generateFontStyle({
    size: "14px",
    weight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.42px",
  }),

  /**
   ** TOOLTIP
   */
  TOOL_TIP: generateFontStyle({
    size: "14px",
    weight: 400,
    lineHeight: "130%",
    letterSpacing: "-0.42px",
  }),
};

export const USER_SELECT_NONE = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export const SCROLL_BAR = {
  TABLE: (theme: Theme) => css`
    &::-webkit-scrollbar {
      width: 14px;
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray2};
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15) inset;
      border-bottom-right-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray7};

      border: 4px solid rgba(0, 0, 0, 0);
      border-radius: 8px;
      background-clip: padding-box;
    }
  `,

  SIDE_BAR: (theme: Theme) => css`
    &::-webkit-scrollbar {
      width: 14px;
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray8};
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1) inset;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray6};
      border: 4px solid rgba(0, 0, 0, 0);
      border-radius: 8px;
      background-clip: padding-box;
    }
  `,
};

/**
 * input 자동완성 background 컬러 없애기
 */
export const INPUT_AUTOFILL_BACKGROUND_TRANSPARENT = (color: string = "white") => css`
  & input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${color} inset;
  }
`;

export const TextEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
