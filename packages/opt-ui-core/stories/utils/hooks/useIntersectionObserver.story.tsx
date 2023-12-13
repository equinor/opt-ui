/* eslint-disable react/no-unstable-nested-components -- Allowing it for this story */
/* eslint-disable no-console -- Allowing it for this story */
import { Primary, Title } from "@storybook/addon-docs";
import { useRef, type ReactNode } from "react";
import { useIntersectionObserver } from "../../../src";

// Base story
export function Base() {
  function Section({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;
    console.log(`Render Section ${children?.toString()}`, isVisible);
    return (
      <div
        ref={ref}
        style={{
          minHeight: "100vh",
          display: "flex",
          border: "1px dashed #000",
        }}
      >
        <div style={{ margin: "auto" }}>{children}</div>
      </div>
    );
  }
  return (
    <div>
      <Section key="1">div n°1</Section>
      <Section key="2">div n°2</Section>
      <Section key="3">div n°3</Section>
      <Section key="4">div n°4</Section>
      <Section key="5">div n°5</Section>
    </div>
  );
}

// Definition
export default {
  title: "Utils/Hooks/useIntersectionObserver",
  component: useIntersectionObserver,
  parameters: {
    controls: { exclude: ["style"], sort: "alpha" },
    docs: {
      page: () => (
        <>
          <Title>useIntersectionObserver</Title>
          <p>
            This React Hook detects visibility of a component on the viewport
            using the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
              rel="noopener noreferrer"
              target="_blank"
            >
              IntersectionObserver API
            </a>{" "}
            natively present in the browser.
            <br />
            <br />
            It can be very useful to lazy-loading of images, implementing
            &quot;infinite scrolling&quot; or starting animations.
            <br />
            <br />
            You must pass the ref element (from <strong>useRef()</strong>).
            <br />
            <br />
            It takes optionally <strong>root</strong>,{" "}
            <strong>rootMargin</strong> and <strong>threshold</strong> arguments
            from the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
              rel="noopener noreferrer"
              target="_blank"
            >
              native IntersectionObserver API
            </a>{" "}
            and freezeOnceVisible to only catch the first appearance too.
          </p>
          <Primary />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};
