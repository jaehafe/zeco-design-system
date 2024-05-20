'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';

export interface ModalPortalProps {
  children: React.ReactNode;
  open?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ModalPortal({ children, open }: ModalPortalProps) {
  const [mounted, setMounted] = React.useState(false);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined') return <></>;

  return mounted && open ? (
    createPortal(<div onClick={stopPropagation}>{children}</div>, document.getElementById('modal-root') as HTMLElement)
  ) : (
    <></>
  );
}
