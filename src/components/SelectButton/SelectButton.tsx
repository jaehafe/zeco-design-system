import React, { forwardRef } from 'react';
import * as S from './style';
import CheckCircleIcon from '../icons/checkCircle';
import theme from '../../styles/theme.style';

type TabValue = string;
type TabValueObject = { label: TabValue; value: TabValue; disabled?: boolean };
export type DisplayDirectionType = 'row' | 'column';

export interface SelectButtonProps {
  options: TabValueObject[];
  value?: TabValue;
  defaultValue?: TabValue;
  disabled?: boolean;
  onChange: (value: string) => void;

  displayDirection?: DisplayDirectionType;
}

const SelectButton = forwardRef(
  (
    {
      options,
      value,
      // TODO
      // defaultValue,
      disabled,
      onChange,
      displayDirection = 'row',

      ...props
    }: SelectButtonProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const onChangTab = (tabValue: TabValue) => {
      onChange(tabValue);
    };

    const renderRadioButton = (option: TabValueObject, isChecked: boolean, isLast: boolean) => {
      const { label, value: optionValue, disabled: optionDisabled } = option;
      const inputId = `input-${optionValue}`;

      return (
        <S.InputWrapper htmlFor={inputId} disabled={optionDisabled} checked={isChecked} isLast={isLast}>
          <input
            id={inputId}
            type="radio"
            value={optionValue}
            checked={isChecked}
            onChange={() => onChangTab(optionValue)}
            disabled={optionDisabled}
            ref={ref}
            {...props}
          />
          <S.InnerWrapper>
            {displayDirection === 'row' && (
              <CheckCircleIcon width={14} height={14} color={isChecked ? theme.colors.green500 : theme.colors.gray10} />
            )}
            <S.Label isChecked={isChecked} displayDirection={displayDirection}>
              {label}
            </S.Label>
          </S.InnerWrapper>
        </S.InputWrapper>
      );
    };

    return (
      <S.Container displayDirection={displayDirection}>
        {options.map((option, index) => {
          const isChecked = value === option.value;

          return (
            <S.Wrapper
              key={option.value}
              isChecked={isChecked}
              disabled={disabled}
              displayDirection={displayDirection}
              onClick={() => !option.disabled && onChangTab(option.value)}
            >
              {renderRadioButton(option, isChecked, index === options.length - 1)}
            </S.Wrapper>
          );
        })}
      </S.Container>
    );
  },
);

SelectButton.displayName = 'SelectButton';

export default SelectButton;
