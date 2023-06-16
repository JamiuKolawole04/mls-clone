import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";                             
import "aos/dist/aos.css"; // You can also use <link> for styles

import App from "./App.jsx";
import "./index.css";
// ..
AOS.init({
  duration: "1500",
  once: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
