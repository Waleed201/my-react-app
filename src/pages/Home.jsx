import React, { useState, useEffect } from "react"; // Ensure this is at the top
import { Link } from "react-router-dom";
// import Header from "./Header"; // Correct path
import Yearbook from "../assets/Photos/YearbookImg.png";
import AchievementList from "./AchievementList";

import "../css/App.css";
import "../css/Home.css";

function Home() {
  const [count, setCount] = useState(1500); // Initialize state

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 2300) return prev + 1; 
        clearInterval(interval); 
        return prev;
      });
    }, 1); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="YearBookCard">
          <img src={Yearbook} alt="YearBookPhoto" />
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

        <div className="hst">
          <h2>انجازات اللجنة</h2>
          <AchievementList />
        </div>
      </div>
    </>
  );
}

export default Home;
