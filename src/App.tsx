import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { FormProvider } from "./context/useFormContext";
import { Header } from "./components/global/Header";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <FormProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        <ToastContainer />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </FormProvider>
  );
}
