import { useState, useEffect } from "react"; 
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation to track route changes
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import JoinUs from "./pages/JoinUs"; 
import Header from "./pages/Header";

import "./css/App.css"
import './css/index.css'; // Update this line


function App() {

  return (
    <div>
      <Header /> {/* Add id to Header component */}
      <div className="Wrapper"> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;