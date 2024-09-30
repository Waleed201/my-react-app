import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import '../css/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    id: '',  // Changed from universityId to match the template
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

    // EmailJS parameters
    const serviceID = 'service_gpL5wej';  // Replace with your actual EmailJS Service ID
    const templateID = 'template_zv9p2rr';  // Replace with your actual EmailJS Template ID
    const userID = 'F60q_fWkOdt66RUxc';  // Replace with your EmailJS User ID

    // Sending the email using EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Success:', response.status, response.text);
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
          <label htmlFor="id">الرقم الجامعي:</label>
          <input
            type="text"
            id="id"
            name="id"  // Changed to match your EmailJS template
            value={formData.id}
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