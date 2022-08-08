import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    body {
      margin: 0;
      padding: 0;
    }
    .Toastify__toast-icon {
      width: 26px;
    }   
    .Toastify__toast-theme--colored.Toastify__toast--error {
      background-color:  #E83F5B;
    }
    .Toastify__toast-theme--colored.Toastify__toast--success {
      background-color: #3FE864;
    }
    .Toastify__toast-theme--dark {
      background-color: #212529;
    }
    
    
    `;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF577F",
    },
    secondary: {
      main: "#868e96",
    },
  },
});

export default GlobalStyle;