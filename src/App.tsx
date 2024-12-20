import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { HomePage } from "./pages/HomePage";
import { CriminalProfile } from "./pages/CriminalProfile";
import { SubmitInformation } from "./pages/SubmitInformation";
import { AboutPage } from "./pages/AboutPage";
import "./i18n/config";

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div
        className={`min-h-screen bg-gray-100 ${
          i18n.language === "ar" ? "rtl" : "ltr"
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/criminal/:id" element={<CriminalProfile />} />
          <Route path="/submit" element={<SubmitInformation />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
