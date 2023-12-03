import React, { useState } from 'react';
import "./LoginSignUp.css";

import logo from './Assets/smulogo.png';
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import phone from "./Assets/phone.png";


const Login = (props) => {
  const [action, setAction] = useState("Sign Up As HealthCare");
  const [selectedRole, setSelectedRole] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Replace this with actual authentication logic
    const mockUserData = {
      email: 'test@example.com',
      password: 'password123',
    };

    if (email === mockUserData.email && password === mockUserData.password) {
      // Authentication successful, perform the necessary actions
      console.log('Login successful!');
    } else {
      // Authentication failed, show an error message or handle accordingly
      console.log('Login failed. Invalid email or password.');
    }
  };

  const handleSignUp = () => {
    // Password security conditions
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, and one number
  
    if (!passwordRegex.test(password)) {
      console.log('Password must be at least 8 characters and include at least one letter and one number.');
      return;
    }
  
    // Email domain check
    const allowedDomains = ['msb.tn', 'medtech.tn', 'smu.tn'];
    const emailDomain = email.split('@')[1];
  
    if (!allowedDomains.includes(emailDomain)) {
      console.log('Invalid email domain. Please use an email from msb.tn, medtech.tn, or smu.tn.');
      return;
    }
  
    // If the function reaches here, it means the password and email conditions are satisfied
    // You can proceed with the signup logic
    console.log('Sign up successful!');
  };
  

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <div className='container'>
        <div className='submit-container'>
            <div className={action === "Sign Up As HealthCare" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up As HealthCare")}>Sign Up As HealthCare</div>
            <div className={action === "Sign Up As Student" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up As Student")}>Sign Up As Student</div>
            <div className={action === "Login" ? "submit blue" : "submit gray"} onClick={() => setAction("Login")}>Login</div>
        </div>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? (
            <>
              <div className='input'>
                <img src={email_icon} alt=''/>
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='input'>
                <img src={password_icon} alt=''/>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className='input'>
                <img src={user_icon} alt=''/>
                <input
                  type='text'
                  placeholder='FullName'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className={action === "Sign Up As HealthCare" ? "input1" : "input"}>
                <img src={phone} alt=''/>
                <input
                  type='text'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {action === "Sign Up As HealthCare" ? (
                  <select
                  className='scrolling-list'
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value='nurse'>Nurse</option>
                  <option value='psychologist'>Psychologist</option>
                </select>
                  ) : null}
              </div>
              <div className='input'>
                <img src={email_icon} alt=''/>
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='input'>
                <img src={password_icon} alt=''/>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          )}
          {action === "Login" ? (
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
          ) : null}
          {action === "Login" ? (
            <div className='Login' onClick={() => handleSignIn()}>Login</div>
          ) : null}
          {action === "Sign Up As HealthCare" || action === "Sign Up As Student" ? (
            <div className='SignUp' onClick={() => handleSignUp()}>Sign Up</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
