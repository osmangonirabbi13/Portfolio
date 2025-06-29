import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Home from "./Pages/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>
);
