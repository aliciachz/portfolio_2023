import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Detail from "./components/Projects/Detail";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor"; 
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? (
        <Loading />
      ) : (
        <div className="App" id="scroll">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/project/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
          <CustomCursor />
        </div>
      )}
    </Router>
  );
}

export default App;
