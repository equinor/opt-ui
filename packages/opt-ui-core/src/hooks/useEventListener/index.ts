/* eslint-disable @typescript-eslint/no-invalid-void-type -- Allowing void as type */
/* eslint-disable no-redeclare -- Using function overload */
import { useEffect, useRef, type RefObject } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void;

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void;

// MediaQueryList Event based useEventListener interface
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions
): void;

/**
 * Use EventListener with simplicity.
 *
 *  Supports Window, Element and Document and custom events with almost the same parameters as the native <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax">addEventListener options</a>.
 *
 * @param eventName - the event name.
 * @param handler - the handler
 * @param element - the optional element ref.
 * @param options - the options to pass to the event listener.
 *
 * @example window based event
 * ```jsx
 * function Component() {
 *    ...
 *    const onScroll = (event: Event) => {
 *      console.log('window scrolled!', event)
 *    }
 *    useEventListener('scroll', onScroll)
 *    ...
 * }
 * ```
 *
 * @example document based event
 * ```jsx
 * function Component() {
 *    useEventListener("visibilitychange", (e: Event) => alert("Welcome back"));
 *    ...
 * }
 * ```
 *
 * @example element based event
 * ```jsx
 * function Component() {
 *    const buttonRef = useRef<HTMLButtonElement>(null)
 *    ...
 *    const onClick = (event: MouseEvent) => {
 *      console.log('button clicked!', event)
 *    }
 *    useEventListener('click', onClick, buttonRef)
 *    ...
 *    return <button ref={buttonRef}>Click me</button>;
 * }
 * ```
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KD extends keyof DocumentEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: KW | KD | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | DocumentEventMap[KD]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const targetElement: T | Window | undefined = element?.current ?? window;
    if (!targetElement?.addEventListener) return;
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export { useEventListener };
