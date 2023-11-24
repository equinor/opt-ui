import { useEffect, type RefObject } from "react";

type AnyEvent = MouseEvent | TouchEvent;

/**
 * React hook for listening for clicks outside of a specified element.
 *
 * This can be useful for closing a modal, a dropdown menu etc.
 *
 * @param ref - the ref of the dom element.
 * @param handler - the handler to execute on click outside.
 *
 * @example
 * ```js
 * function Component() {
 *    const ref = useRef<HtmlDivElement>(null)
 *    useOnClickOutside(ref, () => {
 *      console.log('clicked outside')
 *    })
 *    ...
 *    return <div ref={ref}>...</div>
 * }
 * ```
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler]);
}
