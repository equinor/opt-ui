import { useEffect, useState } from "react";

/**
 * Get the matches for the media query.
 *
 * @param query - the media query to match.
 * @returns true if the query matches, false otherwise.
 */
function getMatches(query: string) {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return false;
}

/**
 * Easily retrieve media dimensions with this Hook which also works onResize.
 *
 * ! Before Safari 14, `MediaQueryList` is based on `EventTarget` and only supports `addListener`/`removeListener` for media queries.
 *
 * @param query - the media query to check.
 * @returns true if the window matches the media query, false otherwise.
 *
 * @example
 * ```js
 * function App() {
 *      const matches = useMediaQuery('(min-width: 768px)')
 *      return (
 *          <div>
 *              {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
 *          </div>
 *      )
 * }
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));
  const handleChange = () => {
    setMatches(getMatches(query));
  };
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only need for query
  }, [query]);
  return matches;
}
