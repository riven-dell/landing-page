import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Styles from "./HeaderStyles.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className={`${Styles.nav_bar}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/logo.svg"
              className="d-inline-block align-top mt-1"
              width={120}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to={"/home"}
                className={`mx-3 my-auto ${Styles.nav_link}`}
              >
                Home
              </NavLink>
              <NavLink
                to={"/home"}
                className={`mx-3 my-auto ${Styles.nav_link}`}
              >
                Our Services{" "}
              </NavLink>
              <NavLink className="ms-2" to={"/contact"}>
                <Button
                  type="primary"
                  className={`px-3 ${Styles.lets_talk_header}`}
                >
                  Let's Talk <GoArrowUpRight size={16} className="ms-1" />
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
