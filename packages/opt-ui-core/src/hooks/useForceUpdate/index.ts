import { useReducer } from "react";

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component.
 *
 * In most cases using a state value with `useState` is preferable but this hook can be useful
 * in some advanced usages of refs for interop or when direct DOM manipulation is required.
 *
 * @example
 * ```js
 * function Component() {
 *    const count = useRef(0);
 *    const forceUpdate = useForceUpdate();
 *    const handleClick = () => {
 *      count.current += 1;
 *      forceUpdate();
 *    };
 *    ...
 *    return (
 *      <div>
 *        <p>Count: {count.current}</p>
 *        <button type="button" onClick={handleClick}>Force Render and update count</button>
 *      </div>
 *    )
 * }
 * ```
 */
export function useForceUpdate(): () => void {
  const [, dispatch] = useReducer((state: boolean) => !state, false);
  return dispatch as () => void;
}
