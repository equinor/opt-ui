/* eslint-disable no-alert -- Allowing it for this story */
import { Primary, Title } from "@storybook/addon-docs";
import { useRef, useState } from "react";
import { useEventListener } from "../../../src";

// Base story
export function Base() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  useEventListener("mousedown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMouseDown(true);
  });
  useEventListener("mouseup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMouseDown(false);
  });
  useEventListener(
    "click",
    () => {
      alert("Button clicked");
    },
    buttonRef
  );
  useEventListener("visibilitychange", () => {
    alert("Welcome back");
  });
  return (
    <>
      <h2>
        <b>Example with window event listeners.</b>
      </h2>
      <br />
      <p>click everywhere on the screen</p>
      <p>Mouse down? {isMouseDown ? "true" : "false"}</p>
      <br />
      <h4>Example with element event listener</h4>
      <button ref={buttonRef} type="button">
        Click me
      </button>
      <br />
      <br />
      <h4>Example with document event listeners</h4>
      <p>Open a new tab and then return to this one</p>
    </>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useEventListener",
  component: useEventListener,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useEventListener</Title>
          <p>
            Use EventListener with simplicity. Supports Window, Element and
            Document.
            <br />
            <br />
            Also supports custom events with almost the same parameters as the
            native{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax">
              addEventListener options
            </a>
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
