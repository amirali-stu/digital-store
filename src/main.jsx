import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "leaflet/dist/leaflet.css";
import "aos/dist/aos.css";
import "./styles/global.css";
import App from "./App.jsx";
import TopHeader from "./components/module/header/Top.jsx";
import NavHeader from "./components/module/header/Nav.jsx";
import Footer from "./components/module/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header className="max-w-full">
      <TopHeader />
      <NavHeader />
    </header>

    <main className="bg-fixed-bg max-w-full">
      <App />
    </main>

    <footer>
      <Footer />
    </footer>
  </StrictMode>
);
