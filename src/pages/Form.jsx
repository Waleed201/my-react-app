import React, { useState } from 'react';
import '../css/Form.css';

const Form = () => {
  // State to manage form fields
"https://script.google.com/macros/s/AKfycbz8UJaX_HbExovT6KGLnKhSVqRe0FO_fo0XPDls-_FYYMBk-uh14zdaEI9lrrr4_KVFDg/exec"

function Submit(e) {
    e.preventDefault(); // Prevent default form submission
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
  
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
        alert("Form submitted successfully!");
        formEle.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error:", error); // Log error response
        alert("Form submission failed!");
      });
  }

  return (
    <div className="form-container">
      <h2>وصل صوتك</h2>
      <form className='form' onSubmit={(e) => Submit(e)}>
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
          <input type="text" id="UniversityId" name="UniversityId" required />
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

      {/* Modal */}
      {/* {modalVisible && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p id="modalMessage">{modalMessage}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Form;