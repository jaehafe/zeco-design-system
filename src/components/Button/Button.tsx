'use client';

import * as React from 'react';
import * as S from './style';
import LoadingIcon from '../icons/check';

export type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'delete' | 'slim' | 'white';
export type ButtonSizes = 'xxl' | 'xl' | 'lg' | 'md';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 종류를 선택합니다. */
  variants?: ButtonVariants;
  /** 버튼 타입을 지정합니다. */
  type?: 'submit' | 'button';
  /** 버튼 사이즈를 나타냅니다. */
  size?: ButtonSizes;
  /** 버튼 문구를 나타냅니다. */
  children?: React.ReactNode;
  /** 버튼의 로딩 상태를 지정할 수 있습니다. 로딩은 disabled 상태와 같습니다. */
  isLoading?: boolean;
  /** 버튼의 비활성화를 나타냅니다. */
  disabled?: boolean;
  /** icon */
  icon?: React.ReactNode;
  /** right icon */
  rightIcon?: React.ReactNode;
  /** icon에 color를 주입합니다. */
  iconColor?: string;

  /** variants, size에 없는 width를 직접 입력해 사용합니다. */
  width?: string | number;
  /** variants, size에 없는  height를 직접 입력해 사용합니다. */
  height?: string | number;
  /** css style을 커스텀 할 수 있습니다. */
  customStyles?: React.CSSProperties;

  /** 버튼 클릭 이벤트 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variants = 'primary',
      type = 'button',
      size = 'lg',
      children,
      isLoading,
      disabled = false,
      icon,
      rightIcon,
      iconColor = '#08846e',

      width,
      height,
      customStyles,

      onClick,
      ...props
    },
    ref,
  ) => {
    const containerStyle = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      ...customStyles,
    };

    return (
      <S.Container
        variants={variants}
        type={type}
        size={size}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        style={containerStyle}
        onClick={onClick}
        rightIcon={!!rightIcon}
        ref={ref}
        {...props}
      >
        {/* {loading ? <LoadingIcon width={14} height={14} color={iconColor} /> : null} */}
        {isLoading ? (
          <S.LoadingWrapper>
            <LoadingIcon color={iconColor} />
          </S.LoadingWrapper>
        ) : null}
        {icon || null}
        {children}
        {rightIcon || null}
      </S.Container>
    );
  },
);

Button.displayName = 'Button';

export default Button;
