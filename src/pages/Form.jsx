import React, { useState } from 'react';
import '../css/Form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  // Submit function
  const Submit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    
    setIsLoading(true); // Set loading to true when submission starts
    setIsSubmitted(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbz8UJaX_HbExovT6KGLnKhSVqRe0FO_fo0XPDls-_FYYMBk-uh14zdaEI9lrrr4_KVFDg/exec", // Replace with your correct Google Apps Script URL
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Log success response
        setIsSubmitted(true); // Set form as submitted
      })
      .catch((error) => { // Log error response
        setIsSubmitted(true);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state after completion
      });
  };

  return (
    <div className="form-container">
      {!isSubmitted ? ( // Conditionally render the form or success message
        <form className='form' onSubmit={Submit}>
          <h2>وصل صوتك</h2>
          <div className="form-group">
            <label htmlFor="FirstName">الاسم الاول:</label>
            <input type="text" id="FirstName" name="FirstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">اسم العائلة:</label>
            <input type="text" id="LastName" name="LastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="UniversityId">الرقم الجامعي:</label>
            <input type="tel" id="UniversityId" name="UniversityId" required />
          </div>
          <div className="form-group">
            <label htmlFor="PhoneNumber">رقم الجوال:</label>
            <input type="tel" id="PhoneNumber" name="PhoneNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="Message">الرسالة:</label>
            <textarea id="Message" name="Message" rows="4" required />
          </div>
          <button className="submit-btn" name='Name' type="submit">إرسال</button>
        </form>
      ) : ( // Show the success message once the form is submitted
        <div className="success-message">
          <img 
          src={isLoading ? "assets/photos/load.gif" : "assets/photos/rightIcon.png"} 
          alt="" />
          <h2>
          {isLoading ? 'جاري الإرسال' : ' تم إرسال الرسالة بنجاح!'} 
            </h2>
          <p>
          {isLoading ? '...' : ' شكرًا لتواصلك معنا. سوف نرد في أقرب وقت ممكن.'} 
            </p>
        </div>  
      )}
    </div>
  );
};

export default Form;