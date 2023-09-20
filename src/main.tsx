import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import App from "@components/app/app";
import { ThemeProvider } from "./components/theme-provider/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-storage">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
