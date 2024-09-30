import React from 'react';
import Header from "./Header"; // Correct path
import Form from './Form';
import xIcon from "../assets/Photos/x-social-media-black-icon.png";

import '../css/App.css'
import '../css/contact.css'


const Contact = () => {
  return (
    <>
      <Header/>
      <div className='contact-container'>
        <div className='background-image'><h1>تواصل معنا</h1></div>
        <div className='section-two'>
          <div className='social-media'>
            <h2>التواصل الاجتماعي</h2>
            <div className='social-icons'>
              {/* <div className="fa-brands fa-facebook"></div>
              <div className="fa-brands fa-instagram"></div> */}
              <div className="fa-brands fa-twitter">
                <img src={xIcon} alt="" />
                <h3>@KFUPMYearBook</h3>
              </div>
              <div className="fa-brands fa-linkedin"></div>
            </div>
          </div>
          <div>
            <Form/>
          </div>
        </div>
      </div>
      {/* <Form/> */}
    </>
  );
};

export default Contact;