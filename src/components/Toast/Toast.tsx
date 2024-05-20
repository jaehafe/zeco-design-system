import * as React from 'react';
import * as S from './style';
import theme from '../../styles/theme.style';

import { toast } from 'sonner';

import CancelCircleIcon from '../icons/cancelCircle';
import FilledCheckCircleIcon from '../icons/filledCheckCircle';
import WarningIcon from '../icons/warning';
import SyncIcon from '../icons/sync';

export type ToastVariants = 'success' | 'info' | 'warning' | 'error' | 'default' | 'zebWarning';

export interface ToastProps {
  t: string | number;
  variants?: ToastVariants;
  closeButton?: boolean;
  title?: string;
  subTitle?: string;
}

export default function Toast({ t, variants = 'success', closeButton = false, title, subTitle }: ToastProps) {
  const [isShowCloseButton, setIsShowCloseButton] = React.useState(false);

  const handleMouseEnter = () => {
    if (!closeButton) {
      setIsShowCloseButton(true);
    }
  };

  const handleMouseLeave = () => {
    if (!closeButton) {
      setIsShowCloseButton(false);
    }
  };

  const renderHeaderIcon = () => {
    if (variants === 'error') {
      return <SyncIcon width={16} height={16} color={theme.colors.red6} />;
    }
    if (variants === 'warning' || variants === 'zebWarning') {
      return <WarningIcon width={16} height={16} color={theme.colors.yellow6} />;
    }

    return <FilledCheckCircleIcon width={16} height={16} color={theme.colors.gray8} />;
  };

  const renderCloseButtonColor = () => {
    const color = theme.colors;
    if (variants === 'error') {
      return color.red6;
    }
    if (variants === 'warning' || variants === 'zebWarning') {
      return color.yellow6;
    }
    if (variants === 'info') {
      return color.green500;
    }

    return color.gray8;
  };

  const renderTitle = () => {
    if (variants === 'error' && title) {
      return title;
    }
    if (variants === 'error') {
      return '문제가 발생했어요. 다시 시도하세요.';
    }

    return title;
  };

  return (
    <S.Container
      onClick={() => toast.dismiss(t)}
      variants={variants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.TitleContainer>
        <S.LeftWrapper>
          {variants !== 'default' ? <S.HeaderIconWrapper>{renderHeaderIcon()}</S.HeaderIconWrapper> : null}

          <S.TitleWrapper variants={variants}>
            <h3 className="title">{renderTitle()}</h3>
            {subTitle ? <span className="subTitle">{subTitle}</span> : null}
          </S.TitleWrapper>
        </S.LeftWrapper>

        {closeButton || isShowCloseButton ? (
          <S.CloseButton isVisible={closeButton || isShowCloseButton}>
            <CancelCircleIcon width={16} height={16} color={renderCloseButtonColor()} />
          </S.CloseButton>
        ) : null}
      </S.TitleContainer>
    </S.Container>
  );
}
