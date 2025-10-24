import { useEffect, RefObject } from "react";

export const useFocusOnStepChange = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  dependency: unknown
) => {
  useEffect(() => {
    if (ref.current) {
      const firstFocusableElement = ref.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [dependency]);
};
