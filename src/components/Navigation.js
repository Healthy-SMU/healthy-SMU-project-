
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "@mui/material/Button";
import logo from "./Assets/smulogo.png";
import { useLocation } from "react-router-dom";

export default function Navigation() {


//to remove the navigation bar from the welcomePage and the loginSignup page 
  const location = useLocation()

if(location.pathname ==="/login" || location.pathname ==="/") {
  return null
};



  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar">
        <Nav.Link>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo"  />
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Button variant="secondary">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width:"50px"
              }}
              to="/"
            >
              HOME
            </Link>
          </Button>
        </Nav.Link>

        <Nav.Link>
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
        </Nav.Link>
        <Nav.Link>
          <Button variant="secondary">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                width:"300px",
              }}
              to="/HCP"
            >
              HEALTHCARE PROFESSIONALS{" "}
            </Link>
          </Button>
        </Nav.Link>
        <Nav.Link>
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
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
