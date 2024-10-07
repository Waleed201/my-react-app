import { useState } from "react";
import { Link } from "react-router-dom";
import YearBookLogo from "../assets/Photos/YB_LogoText_Green.png";
import "../css/Header.css";

function Header() {
  return (
    <>
      <header id="header">
        <div className="Contant">
          <div className="YBLogo">
            <img src={YearBookLogo} alt="Year Book Logo" />
          </div>
          <aside>
            <Link to="/">الصفحة الرئيسية</Link>
            <Link to="/joinus">انضم الينا</Link>
            <Link to="/contact">تواصل معنا</Link>
          </aside>
        </div>
      </header>
    </>
  );
}

export default Header;
