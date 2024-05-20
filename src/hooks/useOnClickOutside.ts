import { RefObject, useEffect } from "react";

type Handler = (e: MouseEvent) => void;

/** useOnClickOutside hook  */
export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  triggerRef?: RefObject<HTMLElement>,
) {
  useEffect(() => {
    const listener = (e: any) => {
      if (
        !ref.current ||
        ref.current.contains(e.target) ||
        (triggerRef && triggerRef.current?.contains(e.target as Node))
      )
        return;

      handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
