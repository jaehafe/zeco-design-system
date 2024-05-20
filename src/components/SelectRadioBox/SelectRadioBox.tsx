import React, { ChangeEvent } from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';
import BorderCircleIcon from '../icons/borderCircle';
import FilledRadioCircleIcon from '../icons/filledRadioCircle';

export interface SelectRadioBoxProps {
  id: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  props?: any;
  disabled?: boolean;
}

export default function SelectRadioBox({ id, checked, onChange, disabled, ...props }: SelectRadioBoxProps) {
  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Container>
      <input
        className="select-radioBox-input"
        id={id}
        type="radio"
        onChange={onRadioChange}
        checked={checked}
        style={{ display: 'none' }}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={id}>
        {disabled ? (
          <BorderCircleIcon width={20} height={20} color={theme.colors.gray4} style={{ pointerEvents: 'none' }} />
        ) : (
          <>
            {checked ? (
              // 체크됨
              <FilledRadioCircleIcon width={16} height={16} fill={theme.colors.green500} />
            ) : (
              // 체크 안 됨
              <BorderCircleIcon width={16} height={16} />
            )}
          </>
        )}
      </label>
    </S.Container>
  );
}
