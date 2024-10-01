import React, { useState, useEffect } from "react"; // Ensure this is at the top
import { Link } from 'react-router-dom';
// import Header from "./Header"; // Correct path
import Yearbook from "../assets/Photos/YearbookImg-removebg-preview.png";


import "../css/App.css";
import "../css/Home.css";

function Home() {
  const [count, setCount] = useState(1500); // Initialize state

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 2000) return prev + 10;
        if (prev < 2290) return prev + 5; // Increment until 2300
        setTimeout(() => {}, 10000);
        if (prev < 2300) return prev + 1; // Increment until 2300
        clearInterval(interval); // Clear interval when reaching 2300
        return prev;
      });
    }, 10); // Adjust the speed of increment here (1ms for fast)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  return (
    <>
      <div className="home-container">
      <div className="YearBookCard">
          <img
            src={Yearbook}
            alt="YearBookPhoto"
          />
          <div className="cardContant">
            <h1>لجنة الكتاب السنوي</h1>
            <p>
              هنا حيث يكتب <span>التاريخ</span>
              <br />
              ليصبح ذكرى <span>جميلة</span>
            </p>
            <Link to="/joinus">كن جزاء من الفريق</Link>
          </div>
        </div>
        <div className="YearBookCard">
        <span className="Number">+{count}</span>
          <div>
            <h1>فريق التصوير</h1>
            <p>
              تصوير اكثر من <span>2300</span>
              <br />
              خريج خلال <span>10 ايام</span>
            </p>
          </div>
        </div>
        
    {/* <iframe
      id="JotFormIFrame-242725941993468"
      title="Lime Theme Contact Us Form"
      onLoad={() => window.parent.scrollTo(0, 0)} // Changed onload to onLoad
      allowTransparency="true" // Changed allowtransparency to allowTransparency
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/242725941993468"
      frameBorder="0" // Changed frameborder to frameBorder
      style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }} // Changed style to an object
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-242725941993468']", "https://form.jotform.com/")</script> */}
    
      </div>
    </>
  );
}

export default Home;

