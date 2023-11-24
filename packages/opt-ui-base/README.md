# @equinor/opt-ui-base

`@equinor/opt-ui-base` is a Panda CSS preset that simplifies the process of styling user interfaces by offering a collection of utility classes and styles.

## Installation

Before using `@equinor/opt-ui-base`, make sure you have Panda CSS installed. Follow the [Panda CSS installation guide](https://panda-css.com/docs/overview/getting-started) for instructions

```sh
npm install @equinor/opt-ui-base
```

or

```sh
yarn add @equinor/opt-ui-base
```

## Usage

Configure Panda CSS in your project by creating a `panda.config.js` file and importing the `optUiPreset` from `@equinor/opt-ui-base`.

```js
// panda.config.js
import { optUiPreset } from "@equinor/opt-ui-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  //...
  presets: ["@pandacss/dev/presets", optUiPreset()],
});
```

### Multi-Theme support

If you want to define and use custom themes beyond light and dark mode, you can do so with `@equinor/opt-ui-base`.

#### Define a theme

```js
// panda.config.js
import { optUiPreset } from "@equinor/opt-ui-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  //...
  presets: [
    "@pandacss/dev/presets",
    optUiPreset([
      {
        name: "pink",
        colors: {
          primary: {
            main: {
              value: {
                base: "#FF4081", // Light mode
                _dark: "#F50057", // Dark mode
              },
            },
            // ...
          },
          // ...
        },
      },
    ]),
  ],
});
```

#### Apply the theme within a color mode

```jsx
<html data-theme="pink" data-color-mode="light|dark">
  <body>
    <h1 className={css({ color: "primary.main" })}>Hello World</h1>
  </body>
</html>
```

> If no `data-color-mode` is provided it will use light mode by default.

## 📚 Documentation

For complete usages, please dive into our the [docs]().

## License

MIT &copy; [Equinor](https://github.com/equinor)
