import { createMuiTheme } from "@material-ui/core/styles";

export type PaletteType = "primary" | "secondary";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#f0f0f0",
      contrastText: "#3c3c3c",
    },
    secondary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff",
    },
  },
  transitions: {
    duration: {
      complex: 1000,
    },
  },
});
