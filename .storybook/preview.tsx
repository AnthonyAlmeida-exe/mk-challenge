import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default"; // Importe o seu theme aqui

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
