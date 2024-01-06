import React from "react";
import { ToastContainer } from "react-toastify";

import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { Routes } from "./routes/index";
import { AuthProvider } from "./hooks/auth";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
        <ToastContainer theme="colored" />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
