import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Water from "./pages/services/Water";
import Solar from "./pages/services/Solar";
import Lightning from "./pages/services/Lightning";
import ScadaIot from "./pages/services/ScadaIot";
import Consultancy from "./pages/services/Consultancy";
import Manufacturing from "./pages/services/Manufacturing";
import Milestone from "./pages/milestone/Milestone";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Board from "./pages/board/Board";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/water" element={<Water />} />
        <Route path="/services/solar" element={<Solar />} />
        <Route path="/services/lightning" element={<Lightning />} />
        <Route path="/services/scada-iot" element={<ScadaIot />} />
        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/services/manufacturing" element={<Manufacturing />} />
        <Route path="/board" element={<Board />} />
        <Route path="/project" element={<Project />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
