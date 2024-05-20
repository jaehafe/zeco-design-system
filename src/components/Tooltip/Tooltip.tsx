import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as S from './style';

export interface TooltipProps {
  /** tooltip trigger content */
  children: React.ReactNode;
  /** tooltip 내용 */
  content: React.ReactNode | string;
  /** tooltip arrow 유무 */
  arrow?: boolean;
  /** tooltip이 content에 보이는 위치 */
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export default function Tooltip({ children, content, arrow = false, side }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={100} skipDelayDuration={3000}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <S.TooltipContainer isValidContent={!!content}>
            <RadixTooltip.Content className="tooltip-content" side={side} sideOffset={8}>
              {content}
              {arrow && <RadixTooltip.Arrow className="RadixTooltipArrow" offset={10} />}
            </RadixTooltip.Content>
          </S.TooltipContainer>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
