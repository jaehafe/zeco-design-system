import React from 'react';
import * as S from './style';
import ExclamationErrorIcon from '../icons/exclamation';
import theme from '../../styles/theme.style';

export interface ErrorMessageProps {
  errorMessage?: string;
}

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return (
    <S.Wrapper>
      <ExclamationErrorIcon color={theme.colors.red6} width={14} height={14} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Wrapper>
  );
}
