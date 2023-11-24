export type ColorPallette = {
  primary: {
    main: string;
    hover: string;
    hoverAlt: string;
    highlight: string;
    highlightHover: string;
  };
  secondary: {
    main: string;
    hover: string;
    highlight: string;
  };
  info: {
    main: string;
    hover: string;
    highlight: string;
  };
  success: {
    main: string;
    hover: string;
    highlight: string;
  };
  warning: {
    main: string;
    hover: string;
    highlight: string;
  };
  danger: {
    main: string;
    hover: string;
    highlight: string;
  };
  disabled: {
    fill: string;
    border: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    disabled: string;
    inverted: string;
    invertedAlt: string;
  };
  background: {
    main: string;
    nav: string;
    paper: string;
    popover: string;
    overlay: string;
    lighten: string;
  };
  table: {
    header: string;
    headerActive: string;
    headerHover: string;
    cell: string;
    cellActive: string;
    cellHover: string;
  };
};

export type ThemeColors = {
  [ColorKey in keyof ColorPallette]: {
    [colorTypeKey in keyof ColorPallette[ColorKey]]: {
      value: {
        base: string;
        _dark: string;
      };
    };
  };
};

export type OptUiPresetOptions = {
  themes: {
    name: string;
    colors: ThemeColors;
  }[];
};
