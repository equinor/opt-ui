import { tokens } from "@equinor/eds-tokens";
import { defineTextStyles } from "@pandacss/dev";

/**
 * Generates the list of text styles from EDS.
 *
 * @returns The generated text styles option preset for pandacss.
 */
export function generatePresetTextStyles() {
  return defineTextStyles({
    h1: { value: tokens.typography.heading.h1 },
    h1Bold: { value: tokens.typography.heading.h1_bold },
    h2: { value: tokens.typography.heading.h2 },
    h3: { value: tokens.typography.heading.h3 },
    h4: { value: tokens.typography.heading.h4 },
    h5: { value: tokens.typography.heading.h5 },
    h6: { value: tokens.typography.heading.h6 },
    p: { value: tokens.typography.paragraph.body_short },
    bodyLong: { value: tokens.typography.paragraph.body_long },
    bodyLongLink: { value: tokens.typography.paragraph.body_long_link },
    bodyLongItalic: { value: tokens.typography.paragraph.body_long_italic },
    bodyLongBold: { value: tokens.typography.paragraph.body_long_bold },
    bodyLongBoldItalic: {
      value: tokens.typography.paragraph.body_long_bold_italic,
    },
    bodyShort: { value: tokens.typography.paragraph.body_short },
    bodyShortLink: { value: tokens.typography.paragraph.body_short_link },
    bodyShortItalic: { value: tokens.typography.paragraph.body_short_italic },
    bodyShortBold: { value: tokens.typography.paragraph.body_short_bold },
    bodyShortBoldItalic: {
      value: tokens.typography.paragraph.body_short_bold_italic,
    },
    overline: { value: tokens.typography.paragraph.overline },
    ingress: { value: tokens.typography.paragraph.ingress },
  });
}
