import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import * as S from './style';
import CloseIcon from '../icons/close';

export interface DialogProps {
  trigger?: React.ReactNode;
  onEscapeKeyDown?: (event: Event) => void;
}

export default function Dialog({ trigger, onEscapeKeyDown }: DialogProps) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

      {/* portal */}
      <RadixDialog.Portal>
        <S.Container>
          <RadixDialog.Overlay className="DialogOverlay" />
          <RadixDialog.Content className="DialogContent" onEscapeKeyDown={onEscapeKeyDown}>
            <RadixDialog.Title className="DialogTitle">Edit profile</RadixDialog.Title>
            <RadixDialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when youre done.
            </RadixDialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input className="Input" id="username" defaultValue="@peduarte" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <RadixDialog.Close asChild>
                <button className="Button green">Save changes</button>
              </RadixDialog.Close>
            </div>
            <RadixDialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <CloseIcon />
              </button>
            </RadixDialog.Close>
          </RadixDialog.Content>
        </S.Container>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
