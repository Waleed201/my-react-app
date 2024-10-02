import { useState, useEffect } from "react"; 
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation to track route changes
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import JoinUs from "./pages/JoinUs"; 
import Header from "./pages/Header";
import "./css/App.css"

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation(); // Tracks the current location (route)

  const adjustBodyMargin = () => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  };

  useEffect(() => {
    // Adjust margin on initial load
    const timer = setTimeout(() => {
      adjustBodyMargin();
    }, 30); // Adjust the delay as necessary
  
    return () => clearTimeout(timer);
  
    // Adjust margin when window is resized or orientation changes
    window.addEventListener("resize", adjustBodyMargin);
    window.addEventListener("orientationchange", adjustBodyMargin);
    window.addEventListener("load", adjustBodyMargin);

    // Cleanup the event listeners when component unmounts
    return () => {
      window.removeEventListener("resize", adjustBodyMargin);
      window.removeEventListener("orientationchange", adjustBodyMargin);
      window.removeEventListener("load", adjustBodyMargin);
    };
  }, []);

  useEffect(() => {
    // Adjust margin whenever the route changes
    adjustBodyMargin();
  }, [location]); // Triggers when route changes

  return (
    <div>
      <Header /> {/* Add id to Header component */}
      <div className="Wrapper" style={{ marginTop: `${headerHeight}px` }}> 
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