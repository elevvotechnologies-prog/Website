import React, { useState } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

const pages = {
  Home: HomePage,
  Services: ServicesPage,
  About: AboutPage,
  Careers: CareersPage,
  Contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState("Home");
  const Page = pages[page] || HomePage;

  function nav(destination) {
    setPage(destination);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFBFF" }}>
      <Navbar page={page} nav={nav} />
      <Page nav={nav} />
      <Footer nav={nav} />
    </div>
  );
}
