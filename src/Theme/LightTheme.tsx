import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    button: {
      textTransform: "capitalize",
      fontSize: "13px",
    },
    h6: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "13px",
    },
    subtitle2: {
      fontSize: "13px",
    },
    caption: {
      fontSize: "12px",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          minWidth: "unset",
          minHeight: "30px",
        },
        outlinedPrimary: {
          color: "#656E7A",
          borderColor: "#656E7A",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: "13px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          fontSize: "12px",
          padding: "1px 2px",
        },
      },
    },
  },
});
