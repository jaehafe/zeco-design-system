import * as React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import * as S from './style';

export interface PopoverProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  arrow?: boolean;
}

export default function Popover({ children, trigger, arrow = false }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <S.Container>
          <RadixPopover.Content className="popover-content" sideOffset={5}>
            {children}
            {arrow && <RadixPopover.Arrow className="popover-arrow" />}
          </RadixPopover.Content>
        </S.Container>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
