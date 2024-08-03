import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e11d47",
      light: "#ec214d",
      dark: "rgb(197, 24, 61)",
    },
    secondary: {
      main: "#F9F4F5",
    },
    text: {
      primary: "#000",
      secondary: "hsl(240 3.8% 45%)",
    },
  },
});

export default theme;
