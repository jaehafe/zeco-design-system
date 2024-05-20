import styled from '@emotion/styled';
import { SerializedStyles, css } from '@emotion/react';
import { FONT_STYLES, SCROLL_BAR, TextEllipsis, USER_SELECT_NONE } from '../../styles/common.style';
import { ANIMATION } from '../../styles/animations';
import { StrNumType, DropdownWidthVariants, DropdownHeightVariants } from './Dropdown';
import { getHeight, getWidth } from './utils';

export const Container = styled.div<{ customStyles?: SerializedStyles }>`
  ${({ customStyles }) => customStyles}

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<{
  widthVariants?: DropdownWidthVariants;
  width?: StrNumType;
  disabled?: boolean;
  isOpen?: boolean;
  error?: boolean;
  isExistValue?: StrNumType;
  placeholder?: string;
  readOnly?: boolean;
}>`
  position: relative;
  width: ${({ widthVariants, width }) => getWidth(widthVariants!, width!)};
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray7};
  border: 1px solid ${({ theme }) => theme.colors.gray6};

  // border 적용 우선순위: open > error
  border: 1px solid
    ${({ theme, error, disabled, isOpen, readOnly }) => {
      if (disabled || readOnly) {
        return css`
          ${theme.colors.gray6}
        `;
      }
      if (isOpen) {
        return css`
          ${theme.colors.green500}
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
  }

  box-shadow: ${({ theme, disabled, readOnly, isOpen, error }) => {
    if (disabled || readOnly) {
      return css`
        ${theme.colors.gray6}
      `;
    }
    if (isOpen) {
      return css`
        ${theme.colors.green500BoxShadow}
      `;
    }
    if (error) {
      return css`
        ${theme.colors.red6BoxShadow}
      `;
    } else {
      return css`
        ${theme.colors.gray6}
      `;
    }
  }};

  border-radius: 4px;
  color: ${({ theme, readOnly }) => (readOnly ? theme.colors.gray11 : theme.colors.gray11)};
  background-color: ${({ theme, disabled, readOnly }) =>
    readOnly ? theme.colors.gray1 : disabled ? theme.colors.gray2 : theme.colors.white};

  pointer-events: ${({ disabled }) => disabled && 'none'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const DropdownArrowContainer = styled.div`
  width: 16px;
  height: 16px;
`;
export const DropdownLabel = styled.div<{
  heightVariants?: DropdownHeightVariants;
  height?: StrNumType;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;

  isExistValue?: StrNumType;
  placeholder?: string;
}>`
  ${FONT_STYLES.BODY1_R16}
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ heightVariants, height }) => getHeight(heightVariants!, height)};
  padding: ${({ heightVariants }) => (heightVariants === 'slim' ? '6px 16px' : '10px 16px')};
  display: flex;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme, disabled, readOnly }) =>
    readOnly ? theme.colors.gray1 : disabled ? theme.colors.gray2 : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${USER_SELECT_NONE}

  & > span {
    color: ${({ theme, isExistValue, disabled, placeholder }) => {
      if (disabled) {
        return css`
          ${theme.colors.gray7}
        `;
      }
      if (isExistValue === '선택' || isExistValue === placeholder) {
        return css`
          ${theme.colors.gray7}
        `;
      } else {
        return css`
          ${theme.colors.gray11}
        `;
      }
    }};

    ${TextEllipsis}
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const DropdownList = styled.ul<{
  top: string;
  listHeight?: string;
  dropdownListWidth?: StrNumType;
  isOpen?: boolean;
}>`
  position: absolute;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  width: ${({ dropdownListWidth }) =>
    dropdownListWidth
      ? typeof dropdownListWidth === 'number'
        ? `${dropdownListWidth}px`
        : dropdownListWidth
      : '100%'};
  top: 45px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  display: none;
  animation-duration: 0.3s;
  animation-timing-function: ease;

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
    `}
`;

export const DropdownListItemWrapper = styled.div<{
  listHeight?: string;
  listHeightSize?: number;
  showScroll?: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 4px;

  overflow-y: ${({ showScroll }) => (showScroll ? 'scroll' : 'hidden')};
  ${({ theme, showScroll }) => showScroll && SCROLL_BAR.TABLE(theme)}
  height: ${({ listHeight, listHeightSize }) => `${listHeightSize}px` || listHeight};
`;

export const DropdownListItem = styled.li<{ isSelected?: any }>`
  list-style: none;
  padding: 16px;
  color: ${({ theme }) => theme.colors.gray11};
  ${TextEllipsis}
  ${FONT_STYLES.BODY1_R16}

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue2};
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.red6};

  ${FONT_STYLES.BODY1_R14}
  & > span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.red6};
    ${FONT_STYLES.BODY1_R14}
  }
`;

export const HiddenSelect = styled.select<{ width?: StrNumType; height?: StrNumType }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
`;
