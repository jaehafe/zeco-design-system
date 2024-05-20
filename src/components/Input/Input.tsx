import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';
import { SerializedStyles } from '@emotion/react';

import CancelCircleIcon from '../icons/cancelCircle';
import ExclamationErrorIcon from '../icons/exclamation';
import VisiblePasswordIcon from '../icons/visible';
import InVisiblePasswordIcon from '../icons/invisible';

import { composeRefs } from '../ComposeRefs/ComposeRefs';

export type InputWidthVariants = 'lg' | 'md';
export type InputHeightVariants = 'lg' | 'md' | 'sm';
export type InputType = 'text' | 'number' | 'password' | 'code';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 넓이를 지정합니다. "lg" | "md" */
  widthVariants?: InputWidthVariants;
  /** 높이를 지정합니다. "lg" | "md" | "sm" */
  heightVariants?: InputHeightVariants;

  /** placeholder */
  placeholder?: string;
  value?: string | number;
  /** 비제어형일 떄 사용합니다. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /** 단위를 지정할 수 있습니다. */
  unit?: string;

  disabled?: boolean;
  /** error를 지정합니다. errorMessage과 같이 사용됩니다. */
  error?: boolean;
  errorMessage?: string;
  /**
   * error wrapper를 보여줄지 말지 결정합니다.
   * 사용하는 곳: signup step2 6자리 코드 입력
   */
  isShowErrorWrapper?: boolean;

  /** input의 넓이를 지정합니다. */
  width?: string | number;
  /** input의 높이를 지정합니다. */
  height?: string | number;
  /** input html name */
  name?: string;
  /** "text" | "number" | "password" */
  type?: InputType;

  allowClear?: boolean;

  customStyles?: SerializedStyles;

  customInputStyles?: SerializedStyles;

  /** readOnly */
  readOnly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      widthVariants = 'lg',
      heightVariants = 'lg',
      placeholder = '내용 입력',
      value,
      onChange,
      onKeyDown,

      unit,

      disabled = false,
      error = false,
      errorMessage,
      isShowErrorWrapper = true,
      width,
      height,
      name,
      type = 'text',

      allowClear = true,
      customStyles,
      customInputStyles,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    const [inputType, setInputType] = React.useState<InputType>(type);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const onClickRef = () => inputRef.current?.focus();

    const toggleShowPassword = () => {
      setInputType((currentType) => (currentType === 'password' ? 'text' : 'password'));
      setIsShowPassword((currentShow) => !currentShow);
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };

    const onClear = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      event.stopPropagation();

      if (onChange) {
        const event = {
          target: {
            name,
            value: type === 'number' ? 0 : '',
          } as HTMLInputElement,
        };
        onChange(event as React.ChangeEvent<HTMLInputElement>);
      }

      // clear 버튼 클릭 후 input 자동 focus
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    // React.useEffect(() => {
    //   const handleOutsideClick = (event: MouseEvent) => {
    //     if (
    //       containerRef.current &&
    //       !containerRef.current.contains(event.target as Node) &&
    //       event.target instanceof HTMLElement &&
    //       event.target.tagName.toLowerCase() !== "input"
    //     ) {
    //       onBlur();
    //     }
    //   };

    //   const handleTabPress = (event: KeyboardEvent) => {
    //     if (event.key === "Tab") {
    //       onBlur();
    //     }
    //   };

    //   document.addEventListener("mousedown", handleOutsideClick);
    //   document.addEventListener("keydown", handleTabPress);

    //   return () => {
    //     document.removeEventListener("mousedown", handleOutsideClick);
    //     document.removeEventListener("keydown", handleTabPress);
    //   };
    // }, []);

    React.useEffect(() => {
      const inputElements = document.querySelectorAll('input[type=number]');

      const type = 'number';

      const preventScroll = (e: WheelEvent) => {
        if (type === 'number') {
          e.preventDefault();
        }
      };

      const onKeyDown = (event: KeyboardEvent) => {
        // 위쪽 화살표 키(38), 아래쪽 화살표 키(40)
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
        }
      };

      const addEventListeners = () => {
        inputElements.forEach((inputElement) => {
          inputElement.addEventListener('wheel', preventScroll as any);
          inputElement.addEventListener('keydown', onKeyDown as any);
        });
      };

      const removeEventListeners = () => {
        inputElements.forEach((inputElement) => {
          inputElement.removeEventListener('wheel', preventScroll as any);
          inputElement.removeEventListener('keydown', onKeyDown as any);
        });
      };

      addEventListeners();

      return () => {
        removeEventListeners();
      };
    }, []);

    const renderRightIcon = () => {
      switch (type) {
        case 'password':
          return (
            <>
              {allowClear && !!value && !disabled && (
                <S.ClearIconWrapper>
                  <CancelCircleIcon onClick={onClear} color={theme.colors.gray8} width={16} height={16} />
                </S.ClearIconWrapper>
              )}

              {isShowPassword ? (
                <VisiblePasswordIcon onClick={toggleShowPassword} width={16} height={16} color={theme.colors.gray8} />
              ) : (
                <InVisiblePasswordIcon onClick={toggleShowPassword} width={16} height={16} color={theme.colors.gray8} />
              )}
            </>
          );

        default:
          return (
            <>
              {readOnly
                ? null
                : allowClear &&
                  !!value &&
                  !disabled && (
                    <S.ClearIconWrapper>
                      <CancelCircleIcon onClick={onClear} color={theme.colors.gray8} width={16} height={16} />
                    </S.ClearIconWrapper>
                  )}
              {unit ? (
                <S.Unit readOnly={readOnly} disabled={disabled}>
                  {unit}
                </S.Unit>
              ) : null}
            </>
          );
      }
    };

    const renderInput = () => {
      let additionalProps = {};

      if (inputType === 'number') {
        additionalProps = {
          value: value ?? 0,

          min: '0',
          max: '',
          pattern: '.*',
          step: 'any',
        };
      } else {
        additionalProps = {
          value: value ?? '',
        };
      }

      return (
        <input
          ref={composeRefs(inputRef, ref)}
          spellCheck={false}
          type={inputType}
          placeholder={placeholder}
          onChange={onInputChange}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete="off"
          name={name}
          {...props}
          {...additionalProps}
          onKeyDown={onKeyDown}
        />
      );
    };

    return (
      <S.Container ref={containerRef} onClick={onClickRef} customStyles={customStyles}>
        <S.Wrapper
          widthVariants={widthVariants}
          heightVariants={heightVariants}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          width={width}
          height={height}
          // value가 0 또는 값이 있을 때 check <-- border 때문에 체크해야함
          value={!!(!!value || value === 0)}
          unit={!!unit}
        >
          {/* input */}
          <S.InputWrapper disabled={disabled} error={error} readOnly={readOnly} customInputStyles={customInputStyles}>
            {renderInput()}
          </S.InputWrapper>

          {type === 'code' ? null : <S.IconWrapper>{renderRightIcon()}</S.IconWrapper>}
        </S.Wrapper>

        {/*
         * error validation
         * disabled가 우선순위이기 때문에 disabled=true이면
         * error validation 적용 안됨 -> null
         */}
        {isShowErrorWrapper ? (
          <>
            {disabled ? null : errorMessage ? (
              <S.ErrorWrapper>
                <S.IconWrapper>
                  <ExclamationErrorIcon width={14} height={14} color={errorMessage && theme.colors.red6} />
                </S.IconWrapper>
                <S.ErrorSpan>{errorMessage}</S.ErrorSpan>
              </S.ErrorWrapper>
            ) : null}
          </>
        ) : null}
      </S.Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
