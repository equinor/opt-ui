import { tokens } from "@equinor/eds-tokens";
import { defineTextStyles } from "@pandacss/dev";

/**
 * Cleans a text style token removing unwanted properties.
 *
 * @param obj - The input object.
 * @returns The token without unwanted properties.
 */
function cleanTextStyleToken<T extends object>(token: T) {
  delete (token as { color?: string }).color;
  return token;
}

/**
 * Generates the list of text styles from EDS.
 *
 * @returns The generated text styles option preset for pandacss.
 */
export function generatePresetTextStyles() {
  const textStyles = defineTextStyles({
    h1: {
      value: cleanTextStyleToken(tokens.typography.heading.h1),
    },
    h1Bold: {
      value: cleanTextStyleToken(tokens.typography.heading.h1_bold),
    },
    h2: {
      value: cleanTextStyleToken(tokens.typography.heading.h2),
    },
    h3: {
      value: cleanTextStyleToken(tokens.typography.heading.h3),
    },
    h4: {
      value: cleanTextStyleToken(tokens.typography.heading.h4),
    },
    h5: {
      value: cleanTextStyleToken(tokens.typography.heading.h5),
    },
    h6: {
      value: cleanTextStyleToken(tokens.typography.heading.h6),
    },
    p: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_short),
    },
    bodyLong: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_long),
    },
    bodyLongLink: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_long_link),
    },
    bodyLongItalic: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_long_italic),
    },
    bodyLongBold: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_long_bold),
    },
    bodyLongBoldItalic: {
      value: cleanTextStyleToken(
        tokens.typography.paragraph.body_long_bold_italic
      ),
    },
    bodyShort: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_short),
    },
    bodyShortLink: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_short_link),
    },
    bodyShortItalic: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_short_italic),
    },
    bodyShortBold: {
      value: cleanTextStyleToken(tokens.typography.paragraph.body_short_bold),
    },
    bodyShortBoldItalic: {
      value: cleanTextStyleToken(
        tokens.typography.paragraph.body_short_bold_italic
      ),
    },
    overline: {
      value: cleanTextStyleToken(tokens.typography.paragraph.overline),
    },
    ingress: {
      value: cleanTextStyleToken(tokens.typography.paragraph.ingress),
    },
  });
  return textStyles;
}
