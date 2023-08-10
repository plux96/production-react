import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
