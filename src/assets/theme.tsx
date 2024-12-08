import { extendTheme } from "@chakra-ui/react";
//Breakpoints are typically calculated as 1em = 16px
const theme = extendTheme({
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "90em", // 1440px (custom breakpoint for laptops)
    "2xl": "118em", // 1888px (close to 1920px)
  },
});

export default theme;
