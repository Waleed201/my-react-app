import React, { useState } from 'react';
import '../css/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    universityId: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSl4EKb94umu60eMjElMVol4EadzF4KA_ERxzl7y4fPwtUTqkRww1i9VgJMjUEA5amiA/exec'; // Replace with your actual URL
  
    fetch(scriptURL, {   // Remove the comma here
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Success:', responseData);
        alert('تم إرسال النموذج بنجاح!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال النموذج.');
      });
  };

  return (
    <div className="form-container">
      <h2>تواصل معنا</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">الاسم الاول:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">اسم العائلة:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="universityId">الرقم الجامعي:</label>
          <input
            type="text"
            id="universityId"
            name="universityId"
            value={formData.universityId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">رقم الجوال:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">الرسالة:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-btn" type="submit">إرسال</button>
      </form>
    </div>
  );
};

export default Form;