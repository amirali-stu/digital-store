import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import TopHeader from "./components/module/header/Top.jsx";
import NavHeader from "./components/module/header/Nav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <TopHeader />
      <NavHeader />
    </header>

    <main className="bg-fixed-bg">
      <App />
    </main>

    <footer></footer>
  </StrictMode>
);
