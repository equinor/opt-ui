# @equinor/opt-ui-base

`@equinor/opt-ui-base` is a framework agnostic utility library based on [Panda CSS](https://panda-css.com/) which offers a preset, recipes and multi theme support that simplifies the process of styling components.

## Installation

Before using `@equinor/opt-ui-base`, make sure you have Panda CSS installed and their necessary tools. Follow the [Panda CSS installation guide](https://panda-css.com/docs/overview/getting-started) for instructions

```sh
npm install -D @equinor/opt-ui-base
```

or

```sh
yarn add -D @equinor/opt-ui-base
```

## Configuration

Configure Panda CSS in your project by creating a `panda.config.ts` file and importing the `optUiPreset` from `@equinor/opt-ui-base`.

```ts
// panda.config.ts
import { optUiPreset } from "@equinor/opt-ui-base";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", optUiPreset()],
  preflight: true, // Whether to enable css reset styles.
  include: [
    "./node_modules/@equinor/opt-ui-base/**/*.js",
    "./path/to/your/src/**/*.{ts,tsx}",
  ],
  emitPackage: true,
  outdir: "@equinor/opt-ui-styled-system",
});
```

When `emitPackage` and `outdir` are configured, the code artifacts will be emitted to the `node_modules`. Going forward, you'll now import the style system functions from the `@equinor/opt-ui-styled-system` package.

```js
// Example of importing the css utility from the style-system package
import { css } from "@equinor/opt-ui-styled-system/css";
```

To enable autocomplete on you IDE you can add `@equinor/opt-ui-styled-system` as a `peerDependency` on your `package.json`

```json
"peerDependencies": {
  "@equinor/opt-ui-styled-system": "*",
}
```

> [!TIP]
> Remember to include the `panda codegen` script, as explained in the [Panda CSS documentation](https://panda-css.com/docs/installation/postcss#update-packagejson-scripts), in your `package.json`. This ensures that the `prepare` script will generate `@equinor/opt-ui-styled-system` when installing the node_modules.

## Usage

Once set up `panda CSS` is set up you should define your application to use a theme and a color mode.

```jsx
import { css } from "@equinor/opt-ui-styled-system/css";

function App() {
  return (
    <html data-theme="equinor" data-color-mode="light|dark">
      <body>
        <h1 className={css({ color: "primary.main" })}>Hello World</h1>
      </body>
    </html>
  );
}
```

`optUiPreset` comes with our default `Equinor` theme, but you can create your own themes. Using a theme will ensure that all the recipes utilize the proper colors.

> [!NOTE]
> If no `data-color-mode` is provided it will use light mode by default.

## Multi-Theme support

If you want to define and use your custom theme beyond our default `Equinor` theme, you can do so with `@equinor/opt-ui-base`.

### Define a theme

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

> [!IMPORTANT]
> A theme MUST define all the color's pallette

### Use the theme

```jsx
import { css } from "@equinor/opt-ui-styled-system/css";

function App() {
  return (
    <html data-theme="pink" data-color-mode="dark">
      <body>
        <h1 className={css({ color: "primary.main" })}>Hello World</h1>
      </body>
    </html>
  );
}
```

You can place the `data-theme` or `data-color-mode` attributes anywhere; they are not restricted to the HTML node, and the system will use the last one defined.

```jsx
import { css } from "@equinor/opt-ui-styled-system/css";

function App() {
  return (
    <html data-theme="equinor" data-color-mode="dark">
      <body>
        <p className={css({ color: "primary.main" })}>
          Text with color primary main using the default equinor theme and dark
          mode.
        </p>
        <div data-theme="pink" data-color-mode="dark">
          <p className={css({ color: "primary.main" })}>
            Text with color primary main using the pink theme and dark mode.
          </p>
        </div>
      </body>
    </html>
  );
}
```

> [!CAUTION]
> If you define a `data-theme`, you should also define `data-color-mode`; otherwise, a light theme will be used, even if you had defined data-color-mode in a previous node.

## License

MIT &copy; [Equinor](https://github.com/equinor)
