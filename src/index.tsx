import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./theme/ContextProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
