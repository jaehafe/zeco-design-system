import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';

import BorderSquareIcon from '../icons/borderSquare';
import CheckSquareIcon from '../icons/checkSquare';
import { SerializedStyles } from '@emotion/react';

export interface TableCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: any;
  disabled?: boolean;
  customStyles?: SerializedStyles;
}

const TableCheckbox = React.forwardRef<HTMLInputElement, TableCheckboxProps>(
  ({ id, checked, onChange, disabled, customStyles, ...props }, ref) => {
    return (
      <S.Container customStyles={customStyles}>
        <input
          ref={ref}
          className="checkbox-input"
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          style={{ display: 'none' }}
          disabled={disabled}
          {...props}
        />
        <label htmlFor={id}>
          {disabled ? (
            <BorderSquareIcon width={20} height={20} color={theme.colors.gray4} style={{ pointerEvents: 'none' }} />
          ) : (
            <>
              {checked ? (
                // 체크됨
                <CheckSquareIcon width={16} height={16} fill={theme.colors.green500} />
              ) : (
                // 체크 안 됨
                <BorderSquareIcon width={16} height={16} />
              )}
            </>
          )}
        </label>
      </S.Container>
    );
  },
);

TableCheckbox.displayName = 'TableCheckbox';

export default TableCheckbox;
