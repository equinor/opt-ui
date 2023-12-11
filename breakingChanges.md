# Breaking changes in OPT

List of breaking changes by components

## Button

- Changed prop `color` to `variantColor`.
- A LinkButton now must explicitly indicates the `as` prop, e.g:

```jsx
<Button
  as="a"
  href="https://www.equinor.com/"
  rel="noopener noreferrer"
  target="_blank"
>
  External Link Button
</Button>
```

## Utils

The next utilities has been removed because it force users to use specific solutions which wasn't optimal:

- setRef.
- deviceDetector
- formatDateAs, use a date library if need it for example date-fns, opt-ui no longer includes a date library.
- generateUID, please use the react `useId` hook.
- getBaseURL, if need it this was the implementation:

```ts
function getBaseURL(url?: string) {
  const baseUrl = new URL(url || "", window.location.origin);
  return baseUrl.href;
}
```

- getUTCTime, if need it this was the implementation:

```ts
function getUTCTime(date: unknown) {
  const d = parseDate(date);
  return !d
    ? null
    : Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}
```

- isDescendant, If need it this was the implementation:

```ts
function isDescendant(parent: HTMLElement | null, child: HTMLElement | null) {
  if (!parent || !child) return false;
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
}
```

- parseDate, use a parseDate from a date library such as date-fns, If need it this was the implementation:

```ts
import { parseISO } from "date-fns";

function parseDate(date: unknown) {
  if (!date) return null;
  if (typeof date === "number") return new Date(date);
  if (date instanceof Date && typeof date.getMonth === "function") return date;
  if (typeof date === "string") {
    if (date.includes("T") && !date.includes("Z")) {
      date = date.concat("Z");
    }
    const tmpDate = new Date(date as string);
    if (!Number.isNaN(tmpDate.getTime())) return tmpDate;
    return parseISO(date as string);
  }
  return null;
}
```
