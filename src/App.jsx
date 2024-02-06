import { useState } from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/layout/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./pages/caseStudy/CaseStudy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/case" element={<CaseStudy />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
