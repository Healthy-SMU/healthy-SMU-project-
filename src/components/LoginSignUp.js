import React, { useState } from 'react';
import "./LoginSignUp.css";

import logo from './Assets/smulogo.png';
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import phone from "./Assets/phone.png";


const Login = (props) => {
  const [action, setAction] = useState("Sign Up");
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

  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <div className='container'>
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
                  placeholder='ID'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className='input'>
                <img id='pho' src={phone} alt=''/>
                <input
                  type='text'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
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
          {action === "Sign Up" ? (
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
          ) : null}
          <div className='submit-container'>
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignIn}>Login</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
