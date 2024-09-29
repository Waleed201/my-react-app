import { useState } from "react";
import { Link } from 'react-router-dom';
import YearBookLogo from "../assets/Photos/YB_LogoText_Green.png";
import "../css/Header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="Contant">
          <div className="YBLogo">
            <img src={YearBookLogo} alt="Year Book Logo" />
          </div>
          <aside>
            <a href=""><div><Link to="/">الصفحة الرئيسية</Link></div></a>
            <a href=""><div><Link to="/about">عن الكتاب السنوي</Link></div></a>
            <a href=""><div><Link to="/contact">تواصل معنا</Link></div></a>
            <a href=""><div><Link to="/joinus">انضم الينا</Link></div></a>
          </aside>
        </div>
      </header>
    </>
  );
}

export default Header;
