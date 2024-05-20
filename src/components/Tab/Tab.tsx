import * as React from 'react';
import * as S from './style';
import Tooltip from '../Tooltip/Tooltip';

export type TabValue = string;
export type TabValueObject = {
  label: TabValue | React.ReactNode;
  value: TabValue;
  disabled?: boolean;
  tooltip?: string;
};
export type TabSize = 'md';
export type TabVariants = 'main';

export interface TabProps {
  size: TabSize;
  variants: TabVariants;
  options: TabValueObject[];
  value?: TabValue;
  defaultValue?: TabValue;
  onChange: (value: string) => void;
}

export default function Tab({ size = 'md', variants = 'main', options, value, onChange }: TabProps) {
  const onChangeTab = (tabValue: TabValue) => {
    onChange(tabValue);
  };

  const renderRadioButton = (option: TabValueObject, isLast: boolean) => {
    const { label, value: optionValue, disabled: optionDisabled, tooltip } = option;
    const inputId = `input-${optionValue}`;
    const isChecked = value === optionValue;
    const radioButton = (
      <S.InputWrapper
        htmlFor={inputId}
        disabled={optionDisabled}
        checked={isChecked}
        size={size}
        variants={variants}
        isLast={isLast}
      >
        <input
          id={inputId}
          type="radio"
          value={optionValue}
          checked={isChecked}
          onChange={() => onChangeTab(optionValue)}
          disabled={optionDisabled}
        />
        <span>{label}</span>
      </S.InputWrapper>
    );

    return tooltip ? <Tooltip content={tooltip}>{radioButton}</Tooltip> : radioButton;
  };

  return (
    <S.Container className="tab-container" variants={variants} size={size}>
      {options.map((option, index) => (
        <div key={option.value}>{renderRadioButton(option, index === options.length - 1)}</div>
      ))}
    </S.Container>
  );
}
