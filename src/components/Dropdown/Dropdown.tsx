import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';
import { SerializedStyles } from '@emotion/react';

import { getListHeightSize } from './utils';

import DropdownArrowIcon from '../icons/dropdownArrow';
import ExclamationErrorIcon from '../icons/exclamation';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export type StrNumType = string | number | null;
export type DropdownWidthVariants = 'auto' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type DropdownHeightVariants = 'default' | 'slim';

export type DropdownOptionType = {
  value?: string | number;
  label?: string;
};

export interface DropdownProps {
  options: DropdownOptionType[];
  defaultValue?: StrNumType;
  value?: DropdownOptionType | string | number;
  name?: string;
  onChange?: (value: StrNumType) => void;

  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  readOnly?: boolean;

  width?: StrNumType;
  height?: StrNumType;
  dropdownListWidth?: StrNumType;

  widthVariants?: DropdownWidthVariants;
  heightVariants?: DropdownHeightVariants;
  listHeightSize?: number;
  showScroll?: boolean;

  placeholder?: string;

  customStyles?: SerializedStyles;
}

const Dropdown = React.forwardRef(
  (
    {
      options,
      defaultValue,
      value: externalValue,
      name,
      onChange,

      error = false,
      errorMessage,
      disabled = false,
      readOnly = false,

      width,
      height,
      dropdownListWidth,

      widthVariants = 'auto',
      heightVariants = 'default',
      listHeightSize,

      placeholder = '선택',

      customStyles,
    }: DropdownProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = React.useState(false); // dropdown open
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [selectedOption, setSelectedOption] = React.useState<DropdownOptionType | null>(null);

    const heightRef = React.useRef<string>('40px');
    const listHeight = heightVariants === 'slim' ? '154px' : '180px';

    useOnClickOutside(containerRef, () => {
      setIsOpen(false);
    });

    React.useEffect(() => {
      switch (heightVariants) {
        case 'slim':
          heightRef.current = '32px';
          break;
        default:
          heightRef.current = '40px';
          break;
      }
    }, [heightVariants]);

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(e.target.value);

    const onClickLabel = () => {
      if (readOnly) return;
      setIsOpen((prev) => !prev);
    };

    const onClickOption = (optionValue: StrNumType) => {
      setInternalValue(optionValue);

      if (onChange) {
        onChange(optionValue);
      }

      setIsOpen(false);
    };

    const isDropdownOptionType = (value: any): value is DropdownOptionType => {
      return value && typeof value === 'object' && 'label' in value && value.label !== null;
    };

    const displayValue: string | number | DropdownOptionType =
      externalValue !== undefined ? externalValue : internalValue || '';

    const displayLabel = isDropdownOptionType(externalValue)
      ? externalValue.label
      : options?.find((option) => option?.value === externalValue)?.label;

    React.useEffect(() => {
      if (externalValue !== undefined) {
        setSelectedOption(options?.find((option) => option?.value === displayValue) || null);
      }
    }, [externalValue, options, displayValue]);

    return (
      <S.Container ref={containerRef} customStyles={customStyles}>
        <S.Wrapper
          widthVariants={widthVariants}
          width={width}
          isOpen={isOpen}
          error={error}
          isExistValue={displayLabel || placeholder}
          placeholder={placeholder}
          disabled={!!disabled}
          readOnly={readOnly}
        >
          {/* hidden */}
          <S.HiddenSelect
            name={name}
            id=""
            value={''}
            width={width}
            height={height}
            onChange={onChangeSelect}
            disabled={disabled}
          ></S.HiddenSelect>

          {/* dropdown label */}
          <S.DropdownLabel
            ref={ref}
            heightVariants={heightVariants}
            height={height}
            error={error}
            disabled={disabled}
            readOnly={readOnly}
            onClick={onClickLabel}
            isExistValue={displayLabel || placeholder}
            placeholder={placeholder}
          >
            <span>{displayLabel || placeholder}</span>
            <S.DropdownArrowContainer>
              <DropdownArrowIcon
                width={16}
                height={16}
                color={theme.colors.gray8}
                style={{
                  transition: 'transform 0.3s',
                  transform: `rotate(${isOpen ? -180 : 0}deg)`,
                }}
              />
            </S.DropdownArrowContainer>
          </S.DropdownLabel>

          {/* dropdown list */}
          <S.DropdownList top={heightRef.current} dropdownListWidth={dropdownListWidth} isOpen={isOpen}>
            <S.DropdownListItemWrapper
              listHeight={listHeight}
              listHeightSize={listHeightSize || getListHeightSize(options)}
              showScroll={listHeightSize ? listHeightSize >= 160 : getListHeightSize(options) > 164}
            >
              {options?.length > 0 &&
                options?.map((option) => (
                  <S.DropdownListItem
                    key={option.value}
                    onClick={() => onClickOption(option.value!)}
                    isSelected={selectedOption?.value === option.value}
                  >
                    {option.label}
                  </S.DropdownListItem>
                ))}
            </S.DropdownListItemWrapper>
          </S.DropdownList>
        </S.Wrapper>

        {/* error message */}
        {disabled ? null : errorMessage ? (
          <S.ErrorWrapper>
            <ExclamationErrorIcon width={14} height={14} color={error ? theme.colors.red6 : theme.colors.gray11} />
            <span>{errorMessage}</span>
          </S.ErrorWrapper>
        ) : null}
      </S.Container>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
