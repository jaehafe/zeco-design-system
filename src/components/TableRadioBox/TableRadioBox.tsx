import React, { ChangeEvent } from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';

import BorderCircleIcon from '../icons/borderCircle';
import FilledCheckCircleIcon from '../icons/filledCheckCircle';

export interface TableRadioBoxProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  props?: any;
  disabled?: boolean;
  name?: string;
}

export default function TableRadioBox({ id, checked, onChange, disabled, name, ...props }: TableRadioBoxProps) {
  return (
    <S.Container>
      <input
        className="checkbox-input"
        id={id}
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
        style={{ display: 'none' }}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={id}>
        {disabled ? (
          <BorderCircleIcon width={16} height={16} color={theme.colors.gray4} style={{ pointerEvents: 'none' }} />
        ) : (
          <>
            {checked ? (
              // 체크됨
              <FilledCheckCircleIcon width={16} height={16} color={theme.colors.green500} />
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
