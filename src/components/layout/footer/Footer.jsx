import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import Styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <div className={`pt-5 pb-3 ${Styles.footer_bg}`}>
      <Container>
        <Row className="text-center text-lg-start">
          <Col sm={12} lg={6}>
            <img
              src="src/assets/logo-white.svg"
              className="img-fluid"
              width={130}
              alt=""
            />
            <p className={`mt-4 ${Styles.footer_logo_subtext}`}>
              We provide the expertise and support to propel <br /> your
              business forward.
            </p>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Form.Control
                  type="email"
                  className={Styles.input_email_text}
                  placeholder="Enter your Email"
                />
                <Button className={`btn-sm px-3`}>Get Started</Button>
              </div>
            </Form.Group>
          </Col>
          <Col
            sm={12}
            lg={6}
            className={`ps-lg-5 mt-5 mt-lg-0 ${Styles.left_border}`}
          >
            <p className={Styles.started_font}>
              Let’s get started on something great
            </p>
            <p className={Styles.started_font_subtext}>
              Our team of IT experts looks forward to meeting with you and{" "}
              <br />
              providing valuable insights tailored to your business.
            </p>
            <Button className={`btn-sm px-3`}>Get an appointment now</Button>
          </Col>
        </Row>
        <hr className={`mt-5 ${Styles.hrs}`} />
        <Row className="text-center text-lg-start">
          <Col lg={3}>
            <p className={`mt-3 ${Styles.footer_heads}`}>Services</p>
            <p className={`mt-4 ${Styles.footer_subheads}`}>Web Developement</p>
            <p className={`${Styles.footer_subheads}`}>
              Cloud Transformation & Support
            </p>
            <p className={`${Styles.footer_subheads}`}>DevOps-as-a-service</p>
            <p className={`${Styles.footer_subheads}`}>Data Engineering</p>
            <p className={`${Styles.footer_subheads}`}>UI/UX Designing</p>
          </Col>

          <Col lg={2}>
            <p className={`mt-3 ${Styles.footer_heads}`}>Company</p>
            <p className={`mt-4 ${Styles.footer_subheads}`}>Case Studies</p>
            <p className={`${Styles.footer_subheads}`}>About Us</p>
            <p className={`${Styles.footer_subheads}`}>Portfolio</p>
          </Col>

          <Col lg={2}>
            <p className={`mt-3 ${Styles.footer_heads}`}>Our Fields</p>
            <p className={`mt-4 ${Styles.footer_subheads}`}>Healthcare</p>
            <p className={`${Styles.footer_subheads}`}>Hotels</p>
            <p className={`${Styles.footer_subheads}`}>Logistics</p>
            <p className={`${Styles.footer_subheads}`}>Industries</p>
          </Col>

          <Col lg={5}>
            <p className={`mt-3 ${Styles.footer_heads}`}>Connect With Us</p>
            <p className={`mt-4 ${Styles.footer_subheads}`}>
              <IoMailOpenOutline size={20} className="me-1 mb-1" />
              eaxmple@gmail.com
            </p>
            <div></div>
          </Col>
        </Row>
        <hr className={Styles.hrs} />
        <div className="d-flex justify-content-between">
          <div>
            <FaInstagram className={`${Styles.footer_icons}`} size={20} />
            <FaLinkedinIn
              className={`ms-3 ${Styles.footer_icons} `}
              size={20}
            />
            <RiTwitterLine
              className={`ms-3 ${Styles.footer_icons} `}
              size={20}
            />
          </div>
          <div>
            <p className={`${Styles.copyright}`}>
              © 2023 All rights reserved by WordpressRiver
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
