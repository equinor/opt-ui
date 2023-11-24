import { useEffect, useLayoutEffect } from "react";

/**
 * @returns `useLayoutEffect` or `useEffect` based on the best possible choice.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
