import React from "react";
import Header from "./Header"; // Correct path
import Form from "./Form";
import xIcon from "../assets/Photos/x-social-media-black-icon.png";
import linkedinIcon from "../assets/Photos/linkedin.png";

import "../css/App.css";
import "../css/contact.css";

const Contact = () => {

  return (
    <>
      <div className="contact-container">
        <div className="background-image">
          <h1>تواصل معنا</h1>
        </div>
        <div className="section-two">
          <div className="social-media">
            <h2>التواصل الاجتماعي</h2>
            <div className="social-icons">
              {/* <div className="fa-brands fa-facebook"></div>
              <div className="fa-brands fa-instagram"></div> */}
              <a
                href="https://x.com/KFUPMYearBook"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-brands fa-twitter"
              >
                <img src={xIcon} alt="" />
                <h3>@KFUPMYearBook</h3>
              </a>
              <a
                href="https://www.linkedin.com/company/kfupm-yearbook/"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-brands fa-linkedin"
              >
                <img src={linkedinIcon} alt="" />
                <h3>@KFUPM-YearBook</h3>
              </a>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      {/* <Form/> */}
    </>
  );
};

export default Contact;
