import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { useContext } from "react";
import { FaUserAlt } from 'react-icons/fa';
import { Link, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut =()=> {
      logOut()
      .then()
      .catch(error => console.log(error))
    }
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <>
                  {user && (
                    <>
                      <p className="pe-2 fs-5">{user.name}</p>
                      <FaUserAlt
                        style={{ fontSize: '35px' }}
                        className="pe-2"
                      ></FaUserAlt>
                    </>
                  )}
                </>
                {user ? (
                    <Button variant="secondary" onClick={handleLogOut}>Log out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Log In</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;