import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',  // Cor primária (cinza escuro)
        contrastText: '#fff',  // Garantir texto branco para contraste
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography:{
        fontFamily: "Segoe UI"
    }
  });
  theme = responsiveFontSizes(theme);
   export default theme;