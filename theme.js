import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#f44336",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
  overrides: {
    MuiTableRow: {
      root: {
        "&$selected, &$selected:hover": {
          backgroundColor: "#e3f2fd",
        },
      },
    },
  },
});

export default theme;
