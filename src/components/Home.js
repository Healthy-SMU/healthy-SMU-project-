import React from 'react';
import backgroundImage from './Assets/background.jpg';

import "./Home.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



const Home = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Set the height to at least the viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexWrap: "nowrap",
  };


  

  return (
    <div style={backgroundStyle}>
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>welcome to</span>
            <span>healthy SMU </span>
          </div>
        </div>
        <div className="text-bottom">
          <div>your health is our priority!</div>
        </div>
      </div>

      <section className="health-info">
  <h1 style={{color :'black'}}>Welcome to healthy SMU – your gateway to accessible and confidential healthcare support!</h1>
  <p>Easily book meetings with dedicated healthcare professionals, including compassionate nurses and experienced psychologists.</p>
  <p>Your well-being is our priority, and we're here to support you every step of the way.</p>
  <p>Explore personalized healthcare and take control of your health journey by scheduling meetings that fit seamlessly into your student life.</p>
  <p>Connect to discover the possibilities at healthy SMU.</p>
  </section>

      <div className="login_button">
        <Button variant="contained" color="success">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              width: "70px",
            }}
          >
            Connect
          </Link>
        </Button>
      </div>
    </div>

    
  );
};

export default Home;
