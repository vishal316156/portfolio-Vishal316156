import React from "react";
console.log(
    "MAIN.JSX EXECUTED",
    performance.now(),
    new Date().toLocaleTimeString()
);
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <ThemeProvider>
      <App />
    </ThemeProvider>
);