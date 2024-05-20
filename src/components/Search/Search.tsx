import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';

import SearchIcon from '../icons/search';
import CancelCircleIcon from '../icons/cancelCircle';

export interface SearchProps {
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: string;
  name?: string;
  loading?: boolean;
  disabled?: boolean;

  width?: string | number;
  height?: string | number;
  /** css style을 커스텀 할 수 있습니다. */
  customStyles?: React.CSSProperties;
}

export default function Search({
  placeholder = '내용 입력',
  onChange,
  value,
  name,
  loading,
  disabled,

  width,
  height,
  customStyles,
}: SearchProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const onClickRef = () => inputRef.current?.focus();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (onChange) return onChange(inputValue);
  };

  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (onChange) {
      onChange('');
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...customStyles,
  };

  const renderRightIcon = () => {
    if (disabled) return null;
    if (value) {
      return <CancelCircleIcon onClick={onClear} color={theme.colors.gray8} width={16} height={16} />;
    }
  };

  return (
    <S.Container
      ref={containerRef}
      value={value}
      disabled={disabled || loading}
      style={containerStyle}
      onClick={onClickRef}
    >
      <S.Wrapper>
        <S.LeftWrapper disabled={disabled}>
          <SearchIcon width={16} height={16} color={theme.colors.gray8} cursor={'default'} />
          <input
            ref={inputRef}
            name={name}
            placeholder={placeholder}
            value={value || ''}
            type="text"
            onChange={onInputChange}
            disabled={disabled}
          />
        </S.LeftWrapper>

        <S.RightIconWrapper>{renderRightIcon()}</S.RightIconWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
