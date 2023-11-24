/* eslint-disable @typescript-eslint/no-unnecessary-condition -- false positive */
import { useEffect, useState, type RefObject } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * This React Hook detects visibility of a component on the viewport using the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">IntersectionObserver API</a>
 * natively present in the browser.
 *
 * It can be very useful to lazy-loading of images, implementing "infinite scrolling" or starting animations for example.
 *
 * Your must pass the ref element (from `useRef()`).
 *
 * It takes optionally `root`, `rootMargin` and `threshold` arguments from the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">native IntersectionObserver API</a>
 * and freezeOnceVisible to only catch the first appearance too.
 *
 * The returned array contains at the first place a boolean `isVisible` and then the full IntersectionObserver's `entry` object.
 *
 * @example
 * ```js
 * const Section = ({ children }) => {
 *  const ref = useRef<HTMLDivElement | null>(null)
 *  const entry = useIntersectionObserver(ref, {})
 *  const isVisible = !!entry?.isIntersecting
 *
 *  console.log(`Render Section ${children?.toString()}`, isVisible)
 *
 *  return (
 *    <div
 *      ref={ref}
 *      style={{
 *        minHeight: '100vh',
 *        display: 'flex',
 *        border: '1px dashed #000',
 *      }}
 *    >
 *      <div style={{ margin: 'auto' }}>{children}</div>
 *    </div>
 *  );
 * }
 *
 * export default function Component() {
 *  return (
 *    <>
 *      <Section key="1">div n°1</Section>
 *      <Section key="2">div n°2</Section>
 *      <Section key="3">div n°3</Section>
 *      <Section key="4">div n°4</Section>
 *      <Section key="5">div n°5</Section>
 *    </>
 *  );
 * }
 * ```
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([e]: IntersectionObserverEntry[]): void => {
    setEntry(e);
  };
  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, frozen, elementRef, threshold]);
  return entry;
}
