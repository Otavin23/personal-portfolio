import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  fonts: {
    heading: `Open Sans', sans-serif`,
    body: `Open Sans', sans-serif`,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },
});

export { themeChakra };
