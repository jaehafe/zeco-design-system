import * as React from 'react';
import * as S from './style';
import { composeRefs } from '../ComposeRefs/ComposeRefs';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isLengthOver?: boolean;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  isError?: boolean;
  // isDisabled?: boolean
  isReadOnly?: boolean;
  resize?: boolean;
  customStyles?: React.CSSProperties;

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      isLengthOver = false,
      placeholder = '프로젝트 메모를 입력해주세요.',
      width = '100%',
      height = '100%',
      isError = false,
      // isDisabled = false,
      isReadOnly = false,
      resize = false,
      customStyles,
      onChange,
      ...props
    },
    ref,
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const onClickRef = () => textareaRef.current?.focus();

    const containerStyle = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      ...customStyles,
    };

    const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(event);
    };

    return (
      // style={containerStyle}
      <S.Container
        width={width}
        height={height}
        isLengthOver={isLengthOver}
        style={containerStyle}
        isError={isError}
        isReadOnly={isReadOnly}
        resize={resize}
        onClick={onClickRef}
      >
        <textarea
          name={props.name}
          id={props.id}
          value={props.value ?? ''}
          ref={composeRefs(textareaRef, ref)}
          placeholder={placeholder}
          onChange={onInputChange}
          readOnly={isReadOnly}
          {...props}
        />
      </S.Container>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
