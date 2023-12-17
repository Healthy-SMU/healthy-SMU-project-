import React from 'react';
import backgroundImage from './Assets/background.jpg';

import "./Home.css";





const WelcomePage = (props) => {
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
      <div class="animated-title">
        <div class="text-top">
          <div>
            <span>welcome to</span>
            <span>healthy SMU </span>
          </div>
        </div>
        <div class="text-bottom">
          <div>your health is our priority!</div>
        </div>
      </div>

      <p>
        <b>
          Welcome to healthy SMU – your gateway to accessible and confidential
          healthcare support!
        </b>
        <br></br>
        At healthy SMU you can easily and quickly book meetings with dedicated
        healthcare professionals.<br></br> Whether you're seeking guidance from
        compassionate nurses or looking to connect with experienced
        psychologists,<br></br> Your
        well-being is our priority, and we're here to support you every step of
        the way.<br></br> Explore the possibilities of personalized healthcare
        at healthy SMU Take control of your health journey<br></br> by
        scheduling meetings that fit seamlessly into your student life.<br></br>{" "}
        Your well-being is our priority, and we're here to support you every
        step of the way.<br></br> Login and explore the possibilities of
        personalized healthcare at healthy SMU .
      </p>

    </div>
  );
};

export default WelcomePage;
