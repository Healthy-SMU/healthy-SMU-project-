import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';

import logo from './Assets/smulogo.png';

import user_icon from './Assets/person.png';
import email_icon from './Assets/password.png';
import password_icon from './Assets/email.png';

const Login = (props) => {
  const [action, setAction] = useState('Sign Up');
  const [first_name, setFirst_Name] = useState();
  const [last_name, setLast_Name] = useState();
  const [phone_number, setPhone_number] = useState(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/Student/signup', {
        email_address: email,
        firstname: first_name,
        lastname: last_name, 
        password: password,
        phone_number: phone_number, 
      });

      console.log(response.data);
      // Handle the response accordingly, update UI, show messages, etc.
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/Student/login', {
        email_address: email,
        password: password,
      });

      console.log(response.data);
      // Handle the response accordingly, update UI, show messages, etc.
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Login' ? null : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Phone number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {action === 'Sign Up' ? null : (
            <div className="forgot-password">
              Lost Password? <span>Click Here!</span>
            </div>
          )}
          <div className="submit-container">
            <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={action === 'Login' ? null : handleSignup}>
              Sign Up
            </div>
            <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={action === 'Sign Up' ? null : handleLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
