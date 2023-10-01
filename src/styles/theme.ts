import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
      },
    },
  },

  fonts: {
    heading: `Poppins', sans-serif`,
    body: `Poppins', sans-serif`,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },
});

export { themeChakra };
