import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
  Tab,
  Nav,
} from "react-bootstrap";
import Styles from "./HomeStyles.module.css";
import "./HomeStyles.css";
import { GoArrowUpRight } from "react-icons/go";
import ContactUsForm from "../../components/contactUsForm/ContactUsForm";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { caseStudy } from "../../utils/constants";

const Home = () => {
  return (
    <div id="home">
      <div className={`py-5 ${Styles.hero_bg}`}>
        <Container>
          <Row className="py-5">
            <Col xl={5}>
              <p className={Styles.hero_top_header}>EMPOWERMENTS</p>
              <p className={`${Styles.hero_header}`}>
                Seamless IT for your business, boosting your growth.
              </p>
              <p className={`my-4 ${Styles.hero_subtext}`}>
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </p>
              <Button className="btn-sm px-3 py-2 rounded-pill">
                Our Services
              </Button>
              <Button
                className={`btn-sm px-3 py-2 rounded-pill ms-2 ${Styles.lets_talk_btn}`}
              >
                Let's Talk <GoArrowUpRight />
              </Button>
            </Col>
            <Col xl={7} className="mx-auto text-center d-none d-lg-block">
              <img
                src="/assets/bg1-1.png"
                width={500}
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>

          <hr className={Styles.hrs} />
          <Row className="my-5">
            <Col>
              <Card className={`py-3 ps-4 ${Styles.card_mod}`}>
                <Card.Body>
                  <Col xl={3}>
                    <Stack>
                      <p className={Styles.model_head}>How we do</p>
                      <p className={Styles.model_subtext}>
                        Save time and money with our powerful method.
                      </p>
                      <div>
                        <Button className="btn-sm px-3 py-2 rounded-pill">
                          Learn More <GoArrowUpRight />
                        </Button>
                      </div>
                    </Stack>
                  </Col>
                  <Col className="text-center">
                    <img
                      src="/assets/Flow.svg"
                      className="img-fluid py-5"
                      alt=""
                    />
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Styles.expertise_bg}>
        <Container className="py-5">
          <Row className="pb-4">
            <Col className="text-center">
              <p className={Styles.case_study_head}>CASE STUDIES</p>
              <p className={Styles.expertise_head}>Our Area of Expertise</p>
            </Col>
          </Row>
          <Row>
            <Col xl={{ span: 10, offset: 1 }} className="text-center">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Nav
                    variant="pills"
                    className={`bg-white d-flex justify-content-center rounded py-2 px-3 ${Styles.nav_tabs}`}
                  >
                    <Nav.Item className={`me-5 ${Styles.nav_tabs}`}>
                      <Nav.Link eventKey="first">Cloud Transformation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Developement</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">UI/UX Designing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Data Engineering</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="first">
                      <Row className="text-start">
                        {caseStudy?.map((data, ind) => (
                          <Col sm={3}>
                            <Card className={`${Styles.card_mod_expert}`}>
                              <Card
                                className={`${Styles.case_study_tag} ms-auto me-2 mt-1`}
                              >
                                <Card.Body
                                  className={`${Styles.case_study_tag} text-center`}
                                >
                                  {data?.cardHead}
                                </Card.Body>
                              </Card>

                              <div>
                                <img
                                  src={data?.image}
                                  width={200}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </Card>
                            <Link
                              className={Styles.link_dec}
                              to={data?.linkUrl}
                            >
                              <div className="d-grid gap-2">
                                <Button
                                  className={`${Styles.case_study_card} py-2 mt-3`}
                                  size="sm"
                                >
                                  Read Case Study{" "}
                                  <FaArrowRightLong className="ms-2" />
                                </Button>
                              </div>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default Home;
