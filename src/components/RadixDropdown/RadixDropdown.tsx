import * as React from 'react';
import * as S from './styles';
import theme from '../../styles/theme.style';

import * as Select from '@radix-ui/react-select';

import DropdownArrowIcon from '../icons/dropdownArrow';
import ExclamationErrorIcon from '../icons/exclamation';

import { getListHeightSize } from './utils';

export interface RadixDropdownProps {
  options: { label: any; value: any }[];
  name?: string;
  value: string;
  onChange: (value: any) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  //

  width?: StrNumType;
  height?: StrNumType;
  dropdownListWidth?: StrNumType;

  widthvariants?: DropdownWidthVariants;
  heightvariants?: DropdownHeightVariants;
  listheightsize?: number;
  isshowscroll?: boolean;
}

export type StrNumType = string | number | null;
export type DropdownWidthVariants = 'auto' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type DropdownHeightVariants = 'default' | 'slim';

export type DropdownOptionType = {
  value?: string | number;
  label?: string | number;
};

const RadixDropdown = React.forwardRef<HTMLButtonElement, RadixDropdownProps>(
  (
    {
      options,
      name,
      value,
      onChange,
      disabled,
      readOnly,
      placeholder = '선택',
      error,
      errorMessage,
      //

      width,
      height,
      widthvariants = 'auto',
      heightvariants = 'default',
      listheightsize,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef(null);
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false); // dropdown open
    const isSelectedValue = !!value;
    const listheight = heightvariants === 'slim' ? '154px' : '180px';
    const isshowscroll = listheightsize ? listheightsize >= 160 : getListHeightSize(options) > 164;

    React.useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => resizeObserver.disconnect();
    }, [containerRef, containerWidth]);

    return (
      <S.Container ref={containerRef} width={width} widthvariants={widthvariants}>
        {/* <> */}
        <Select.Root
          name={name}
          value={value}
          onValueChange={onChange}
          disabled={disabled || readOnly}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <S.StyledSelectTrigger
            {...props}
            className="SelectTrigger"
            aria-label={value}
            ref={ref}
            width={width}
            widthvariants={widthvariants}
            height={height}
            heightvariants={heightvariants}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            style={{ width: `${containerWidth}px` }}
          >
            <S.SelectValueWrapper disabled={disabled} isSelectedValue={isSelectedValue}>
              <Select.Value placeholder={placeholder} className="SelectValue" />
            </S.SelectValueWrapper>
            <S.StyledSelectIcon className="SelectIcon">
              <DropdownArrowIcon
                width={16}
                height={16}
                color={theme.colors.gray8}
                style={{
                  transition: 'transform 0.3s',
                  transform: `rotate(${isOpen ? -180 : 0}deg)`,
                }}
              />
            </S.StyledSelectIcon>
          </S.StyledSelectTrigger>

          <Select.Portal>
            <S.StyledSelectContent
              className="SelectContent"
              position="popper"
              sideOffset={4}
              width={width}
              widthvariants={widthvariants}
              listheight={listheight}
              listheightsize={listheightsize || getListHeightSize(options)}
              isshowscroll={isshowscroll}
              style={{ width: `${containerWidth}px` }}
              isOpen={isOpen}
            >
              <S.StyledScrollAreaRoot className="ScrollAreaRoot" type="auto">
                <S.StyledSelectViewport
                  className="SelectViewport"
                  style={{ overflowY: undefined, width: `${width}` }}
                  asChild
                >
                  <S.StyledScrollAreaViewport
                    className="ScrollAreaViewport"
                    width={width}
                    widthvariants={widthvariants}
                  >
                    {options?.map((option) => {
                      return (
                        <S.StyledSelectItem key={option.value} value={option.value}>
                          <S.StyledSelectItemText>{option.label}</S.StyledSelectItemText>
                        </S.StyledSelectItem>
                      );
                    })}
                  </S.StyledScrollAreaViewport>
                </S.StyledSelectViewport>
                {/* scroll bar */}
                {isshowscroll && (
                  <S.StyledScrollAreaScrollBar className="ScrollAreaScrollbar" orientation="vertical">
                    <S.StyledScrollAreaThumb className="ScrollAreaThumb" />
                  </S.StyledScrollAreaScrollBar>
                )}
              </S.StyledScrollAreaRoot>
            </S.StyledSelectContent>
          </Select.Portal>
        </Select.Root>

        {disabled ? null : errorMessage ? (
          <S.ErrorWrapper>
            <ExclamationErrorIcon width={14} height={14} color={error ? theme.colors.red6 : theme.colors.gray11} />
            <span>{errorMessage}</span>
          </S.ErrorWrapper>
        ) : null}
        {/* </> */}
      </S.Container>
    );
  },
);

RadixDropdown.displayName = 'RadixDropdown';

export default RadixDropdown;
