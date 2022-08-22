import { createTheme } from "@mui/material/styles";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcRed = "#e91616";
const theme = createTheme({
  palette: {
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    error: {
      main: arcRed,
    },
  },
  typography: {
    h4: {
      fontWeight: 300,
    },
  },
});
export default theme;
