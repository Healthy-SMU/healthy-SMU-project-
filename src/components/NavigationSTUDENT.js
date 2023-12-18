
import React from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "@mui/material/Button";
import logo from "./Assets/smulogo.png";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

export default function NavigationSTUDENT() {


//to remove the navigation bar from the welcomePage and the loginSignup page 
  const location = useLocation()

if(location.pathname ==="/login" || location.pathname ==="/" || location.pathname ==="/Set-time-slots") {
  return null
};

const handleLogout = async () => {
  try {
    const token = Cookies.get('token');
    // Make a request to the logout endpoint
    axios.defaults.withCredentials = true;
    const response = await axios.post('http://localhost:8000/api/logout', {}, {
      headers: { Authorization: `Bearer ${token}` }
    });

    // Check if the logout was successful
    if (response.status === 200) {
      console.log('Logged out successfully');
      Cookies.remove('token')
    } else {
      console.error('Failed to log out');
    }
  } catch (error) {
    console.error('An error occurred while logging out:', error);
  }
};

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar">
        <Nav.Item>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo"  />
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Button variant="secondary" onClick={handleLogout}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width:"70px"
              }}
              to="/"
            >
              log out 
            </Link>
          </Button>
        </Nav.Item>

        <Nav.Item>
          <Button variant="secondary">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width:"250px",
              }}
              to="/book-a-meeting"
            >
              BOOK A MEETING
            </Link>
          </Button>
        </Nav.Item>
       
        <Nav.Item>
          <Button variant="secondary">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width:"100px",
              }}
              to="/profile-details"
            >
              PROFILE
            </Link>
          </Button>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}
