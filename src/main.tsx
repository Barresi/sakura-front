import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import App from "@components/app/app";
import { ThemeProvider } from "./context/theme-provider";
import { SocketProvider } from "./context/socket-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-storage">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SocketProvider>
    </Provider>
  </React.StrictMode>,
);
