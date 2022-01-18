import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      1: "#27AE60",
      2: "#168821",
    },
    red: {
      1: "#EB5757",

      2: "#E60000",
    },
    gray: {
      0: "#F5F5F5",
      1: "#E0E0E0",
      2: "#828282",
      3: "#333333",
    },
    yelow: {
      1: "#FFCD07",
    },
    blue: {
      1: "#155BCB",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      ss: "0.875rem",
      s: "1rem",
      g: "1.125rem",
      gg: "1.375rem",
      xg: "1.625rem",
    },
    styles: {
      global: {
        body: {
          bg: "gray.0",
          color: "gray.2",
        },
      },
    },
  },
});
