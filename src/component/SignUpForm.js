import React, { useState } from 'react';
import './SignUpForm.css';
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <><div><h1> SignUp</h1><form className="form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
      </label>
      <label>
        Create Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <label>
        Retype password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
      </label>
      <label>
        Gender:
        <label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
          Female
        </label>
      </label>
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
      </label>
      <label>
        Accept terms and condition:
        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} />
      </label>
      <button className={'btn signup-button'} type="submit">Submit</button>
    </form></div> </>
  );
}

export default SignupForm;
