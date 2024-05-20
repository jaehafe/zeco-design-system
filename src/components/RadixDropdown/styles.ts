import * as Select from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { DropdownHeightVariants, DropdownWidthVariants, StrNumType } from './RadixDropdown';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FONT_STYLES, TextEllipsis } from '../../styles/common.style';
import { ANIMATION } from '../../styles/animations';
import { getHeight, getWidth } from './utils';

export const StyledSelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<{
  width?: StrNumType;
  widthvariants?: DropdownWidthVariants;
}>`
  width: ${({ widthvariants, width }) => getWidth(widthvariants!, width!)};
`;

export const StyledSelectTrigger = styled(Select.Trigger)<{
  width?: StrNumType;
  widthvariants?: DropdownWidthVariants;
  height?: StrNumType;
  heightvariants?: DropdownHeightVariants;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 2px 16px;
  border-radius: 4px;
  ${FONT_STYLES.BODY1_R16}
  letter-spacing: 0px;
  /* line height 떄문에 'g'영문 아래 부분이 가려져 보임 100% -> 120% */
  line-height: 120%;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ widthvariants, width }) => getWidth(widthvariants!, width!)};
  height: ${({ heightvariants, height }) => getHeight(heightvariants!, height)};

  border: 1px solid
    ${({ theme, error, disabled, readOnly }) => {
      if (disabled || readOnly) {
        return css`
          ${theme.colors.gray6}
        `;
      }
      if (error) {
        return css`
          ${theme.colors.red6}
        `;
      } else {
        return css`
          ${theme.colors.gray6}
        `;
      }
    }};

  &:hover {
    border: 1px solid
      ${({ theme, readOnly, disabled, error }) => {
        if (error) {
          return css`
            ${theme.colors.red6}
          `;
        }
        if (readOnly || disabled) {
          return css`
            ${theme.colors.gray6}
          `;
        } else {
          return css`
            ${theme.colors.green500}
          `;
        }
      }};

    ${ANIMATION.TRANSITION}
  }

  background-color: ${({ theme, disabled, readOnly }) => {
    if (readOnly) {
      return css`
        ${theme.colors.gray1}
      `;
    }
    if (disabled) {
      return css`
        ${theme.colors.gray2}
      `;
    } else {
      return css`
        ${theme.colors.white}
      `;
    }
  }};

  &:focus-visible {
    outline: none;
  }

  &[data-state='open'] {
    ${ANIMATION.TRANSITION}
    border: 1px solid
      ${({ theme, error }) => {
      if (error) {
        return css`
          ${theme.colors.red6}
        `;
      } else {
        return css`
          ${theme.colors.green500}
        `;
      }
    }};
    box-shadow: ${({ theme, error }) => {
      if (error) {
        return css`
          ${theme.colors.red6BoxShadow}
        `;
      } else {
        return css`
          ${theme.colors.green500BoxShadow}
        `;
      }
    }};
  }
`;

export const SelectValueWrapper = styled.span<{ disabled?: boolean; isSelectedValue: boolean }>`
  ${TextEllipsis}

  // className SelectValue
  // SelectValue로 className 선택자를 사용하면 css 적용이 안됨
  & > span {
    ${TextEllipsis}
    color: ${({ theme, disabled, isSelectedValue }) =>
      !isSelectedValue || disabled ? theme.colors.gray7 : theme.colors.gray11};
  }
`;

export const StyledSelectContent = styled(Select.Content)<{
  width?: StrNumType;
  widthvariants?: DropdownWidthVariants;

  listheight?: string;
  listheightsize?: number;
  isshowscroll?: boolean;

  isOpen: boolean;
}>`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  z-index: ${({ theme }) => theme.zIndex.dropdownInModal};
  background-color: ${({ theme }) => theme.colors.white};

  width: ${({ widthvariants, width }) => getWidth(widthvariants!, width!)};
  height: ${({ listheight, listheightsize }) => `${listheightsize}px` || listheight};

  ${TextEllipsis}// animation 수정중
  /* &[data-state="open"] {
    animation-name: ${ANIMATION.DROPDOWN_SLIDE_IN};
  }
  &[data-state="closed"] {
    animation-name: ${ANIMATION.DROPDOWN_SLIDE_OUT};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
      animation-name: ${ANIMATION.DROPDOWN_SLIDE_IN};
    `}

  ${({ isOpen }) =>
    !isOpen &&
    css`
      animation-name: ${ANIMATION.DROPDOWN_SLIDE_OUT};
    `} */
`;
export const StyledSelectViewport = styled(Select.Viewport)`
  height: 288px;
`;
export const StyledSelectItem = styled(Select.Item)`
  padding: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue2};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.green200} !important;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.green200};
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.green200};
  }

  ${TextEllipsis}
  ${FONT_STYLES.BODY1_R16}
`;
export const StyledSelectItemText = styled(Select.ItemText)`
  ${FONT_STYLES.BODY1_R16}
  color: red;
  letter-spacing: 0px;
  font-size: 30px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 100% !important;
  letter-spacing: -0.48px !important;
`;

export const StyledScrollAreaRoot = styled(ScrollArea.Root)`
  width: 100%;
  height: 100%;
`;
export const StyledScrollAreaViewport = styled(ScrollArea.Viewport)<{
  width?: StrNumType;
  widthvariants?: DropdownWidthVariants;
}>`
  width: ${({ widthvariants, width }) => getWidth(widthvariants!, width!)};
  height: 100%;

  & > div {
    display: block !important;
    min-width: auto !important;
  }
`;
export const StyledScrollAreaScrollBar = styled(ScrollArea.Scrollbar)`
  background: ${({ theme }) => theme.colors.gray2};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  justify-content: center;
  padding: 2.5px 2.5px 2.5px 3.5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const StyledScrollAreaThumb = styled(ScrollArea.Thumb)`
  width: 6px !important;
  background-color: ${({ theme }) => theme.colors.gray7};
  border-radius: 3px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.red6};

  svg {
    margin-top: 4px;
  }

  ${FONT_STYLES.BODY1_R14}
  & > span {
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.red6};
    ${FONT_STYLES.BODY1_R14}
  }
`;
