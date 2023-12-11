import { Primary, Title } from "@storybook/addon-docs";
import { useSsr } from "../../../src";

// Base story
export function Base() {
  const {
    isBrowser,
    isServer,
    canUseWorkers,
    canUseEventListeners,
    canUseViewport,
  } = useSsr();
  return (
    <div>
      <p>Is browser: {isBrowser ? "true" : "false"}</p>
      <p>Is server: {isServer ? "true" : "false"}</p>
      <p>Can use workers: {canUseWorkers ? "true" : "false"}</p>
      <p>Can use event listeners: {canUseEventListeners ? "true" : "false"}</p>
      <p>Can use viewport: {canUseViewport ? "true" : "false"}</p>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useSsr",
  component: useSsr,
  parameters: {
    controls: { exclude: ["style"] },
    docs: {
      page: () => (
        <>
          <Title>useSSR</Title>
          <p>Checks if the code is running on the browser or the server.</p>
          <p>
            Also checks if is possible to use workers, event listeners and the
            viewport.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
