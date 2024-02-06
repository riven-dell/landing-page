import React from "react";
import Styles from "./ContactUsFormStyle.module.css";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { PiPhoneCall } from "react-icons/pi";

const ContactUsForm = () => {
  return (
    <div className="my-4">
      <Container>
        <Row className="mx-lg-5">
          <Col xl={{ span: 7 }}>
            <Card className="border border-0 my-5">
              <Card.Body
                className={`py-4 px-4 px-lg-5 ${Styles.card_mod_contact}`}
              >
                <p className={Styles.contact}>CONTACT</p>
                <p className={Styles.connect_style}>Lets get in touch</p>
                <p className={Styles.reach_out}>
                  You can reach us anytime via{" "}
                  <span className={Styles.email_color}>bluebase@mail.com</span>
                </p>
                <hr className={Styles.hrs} />
                <Form>
                  <Row>
                    <Col xs={12} lg={0}>
                      <Form.Label className={Styles.contact_form_lable}>
                        First Name
                      </Form.Label>
                      <Form.Control
                        className={Styles.contact_form_input}
                        placeholder="First name"
                      />
                    </Col>
                    <Col xs={12} lg={0} className="mt-3 mt-xl-0">
                      <Form.Label className={Styles.contact_form_lable}>
                        Last Name
                      </Form.Label>
                      <Form.Control
                        className={Styles.contact_form_input}
                        placeholder="Last name"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Form.Label className={Styles.contact_form_lable}>
                        Email
                      </Form.Label>
                      <Form.Control
                        className={Styles.contact_form_input}
                        placeholder="Your Email"
                        type="email"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Form.Label className={Styles.contact_form_lable}>
                        Pone Number
                      </Form.Label>
                      <Form.Control
                        className={Styles.contact_form_input}
                        type="number"
                        placeholder="Conatact Number With Country Code"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Form.Label className={Styles.contact_form_lable}>
                        Message
                      </Form.Label>
                      <Form.Control
                        className={Styles.contact_form_input}
                        as="textarea"
                        rows={4}
                      />
                    </Col>
                  </Row>
                  <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" size="sm" className="py-2">
                      Get Started
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={5}>
            <Card className="border border-0 my-5 mx-xl-5">
              <Card.Body
                className={`py-5 px-5 text-center text-lg-start ${Styles.card_mod_contact}`}
              >
                <p className={Styles.show_num}>97%</p>
                <p className={Styles.show_num_subtext}>Client Satisfaction</p>
                <hr className={`my-4 ${Styles.hrs}`} />
                <p className={Styles.show_num}>15+</p>
                <p className={Styles.show_num_subtext}>
                  Projects Done Around World
                </p>
                <hr className={`my-4 ${Styles.hrs}`} />
                <PiPhoneCall size={40} color="#3e71de" />
                <p className={`mt-3 ${Styles.contact_info}`}>Contact Info</p>
                <p className={Styles.email_color_conatc_form}>
                  Bluebase@mail.com
                </p>
                <hr className={`my-4 ${Styles.hrs}`} />
                <PiPhoneCall size={40} color="#3e71de" />
                <p className={`mt-3 ${Styles.contact_info}`}>Contact Info</p>
                <p className={Styles.email_color_conatc_form}>
                  Bluebase@mail.com
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsForm;
