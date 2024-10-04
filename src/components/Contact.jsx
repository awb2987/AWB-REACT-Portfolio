import React, { useState } from 'react';
import { validateForm } from './common/FormValidation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error messages for the current field
    setErrors({ ...errors, [name]: '' });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Show required field error if field is empty
    if (!value) {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = validateForm(formData); // Validate overall form
    setErrors(newErrors);

    // Check if email is a valid format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address input';
      setErrors(newErrors);
    }

    // If no errors, log form data and reset the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur} // Validate on blur
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur} // Validate on blur
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur} // Validate on blur
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
      <div className="contact-info">
        <p>
          Email: <span className="email-address">awb2987@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
