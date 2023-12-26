import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Nav,
  Offcanvas,
  Navbar,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import Styles from "./HeaderStyles.module.css";
import { Dropdown, Space } from "antd";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const cardRef = useRef(null);

  console.log(cardRef);

  const handleShow = () => setShow(true);
  const handleNoShow = () => setShow(false);
  const handleCardMouseLeave = () => {
    if (cardRef.current && cardRef.current.contains(document.activeElement)) {
      return;
    }
    setShow(false);
  };

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
            <Nav className="me-auto ms-4">
              <NavLink
                to={"/home"}
                className={`mx-3 my-auto ${Styles.nav_link}`}
              >
                Home
              </NavLink>
              <NavLink
                to={"/home"}
                className={`mx-3 my-auto ${Styles.nav_link}`}
                onMouseEnter={handleShow}
              >
                <Space>
                  Our Services{" "}
                  <FaCaretDown
                    className={`${Styles.services_down_icon} mb-1`}
                  />
                </Space>
              </NavLink>
              <NavLink
                to={"/home"}
                className={`mx-3 my-auto ${Styles.nav_link}`}
              >
                Portfolio
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
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

      {show && (
        <Row>
          <Card
            className="z-3 position-absolute ms-2 border border-0 py-5"
            ref={cardRef}
            onMouseLeave={handleCardMouseLeave}
          >
            <Card.Body>
              <Row>
                <Col xl={2}>
                  <Card className={Styles.card_mod_down}>
                    <Card.Body>
                      <div className="d-flex">
                        <div></div>
                        <div>Web Developement</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={2}>
                  <Card>
                    <Card.Body>Hello</Card.Body>
                  </Card>
                </Col>
                <Col xl={2}>
                  <Card>
                    <Card.Body>Hello</Card.Body>
                  </Card>
                </Col>
                <Col xl={6}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      )}
    </>
  );
};

export default Header;
