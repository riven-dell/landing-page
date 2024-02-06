import React, { useState, useEffect } from "react";
import Styles from "./CaseStudy.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  ecommerce,
  migration,
  streamlining,
  microservices,
} from "../../utils/constants";
import ContactUs from "../contactUs/ContactUs";

const CaseStudy = () => {
  const [caseStudyCus, setCaseStudyCus] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let updatedCaseStudy;
    switch (id) {
      case "Accelerating-E-Commerce-Innovation-through-CI/CD-Transformation":
        updatedCaseStudy = ecommerce;
        break;
      case "Seamless-Migration-to-AWS-for-Cost-Efficiency-and-Scalability":
        updatedCaseStudy = migration;
        break;
      case "Streamlining-Database-Management-and-Migration-for-Enhanced-Fault-Tolerance":
        updatedCaseStudy = streamlining;
        break;
      case "Transitioning-from-Monolithic-to-Microservices-Architecture-for-Scalability":
        updatedCaseStudy = microservices;
        break;
      default:
        updatedCaseStudy = ecommerce;
        break;
    }
    setCaseStudyCus(updatedCaseStudy);
  }, [id]);

  return (
    <div className={Styles.casestudy}>
      <Row className={Styles.hero_bg}>
        <Col>
          <Container className="py-4">
            <p className={`text-center ${Styles.case_study_head}`}>
              CASE STUDIES
            </p>
            <p className={`text-center ${Styles.page_head}`}>
              {caseStudyCus?.project_title}
            </p>
            <p className={`text-center ${Styles.page_tag_line}`}>
              The makers of AI have announced the company will be dedicating 20%
              of its compute processing power over the next four years
            </p>
          </Container>
        </Col>
      </Row>

      <Container className="py-5">
        <Row className="">
          <Col>
            <p className={`text-center ${Styles.client_head}`}>Highlights</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p
              className={`text-center ${Styles.highlights_head} ${Styles.color_blue}`}
            >
              80%
            </p>
            <p className={`text-center ${Styles.highlights_text}`}>
              Compute Time saved by using incremental refresh time.
            </p>
          </Col>
          <Col>
            <p
              className={`text-center ${Styles.highlights_head} ${Styles.color_orange}`}
            >
              2-4x
            </p>
            <p className={`text-center ${Styles.highlights_text}`}>
              Improvement in visualization load times
            </p>
          </Col>
          <Col>
            <p
              className={`text-center ${Styles.highlights_head} ${Styles.color_green}`}
            >
              60%
            </p>
            <p className={`text-center ${Styles.highlights_text}`}>
              of Project delivery time saved by detailed pre-assessment
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p
              className={`text-center ${Styles.highlights_head} ${Styles.color_yellow}`}
            >
              99%
            </p>
            <p className={`text-center ${Styles.highlights_text}`}>
              Data Redundancy removed
            </p>
          </Col>
          <Col>
            <p
              className={`text-center ${Styles.highlights_head} ${Styles.color_blue}`}
            >
              4x
            </p>
            <p className={`text-center ${Styles.highlights_text}`}>
              Increased database query speed
            </p>
          </Col>
        </Row>
        <Row className="px-xl-5 mb-5">
          <Col>
            <Card className={`mt-5 ${Styles.client_req_card}`}>
              <Card.Body className="text-center">
                <p className={`${Styles.client_head}`}>Client Overview</p>
                <p className={`${Styles.client_body}`}>
                  {caseStudyCus?.client_overview}
                </p>
              </Card.Body>
            </Card>
            <div className="mt-5">
              <p className={Styles.customer_challenge}>
                Customer-Facing Challenge
              </p>
              {caseStudyCus?.challenges?.map((data, index) => (
                <div key={index}>
                  <p className={Styles.challenge_subhead}>{data?.head}</p>
                  {data?.body?.map((e, id) => (
                    <p key={id} className={Styles.casestudy_pts}>
                      <span>
                        <img
                          src="/src/assets/casestudy/bulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                        {e}
                      </span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <Card className={`mt-5 ${Styles.client_sol_card}`}>
                <Card.Body className="p-5">
                  <p className={`${Styles.client_head}`}>
                    Solution Implementation
                  </p>
                  {caseStudyCus?.solution_implementation?.map((data, index) => (
                    <div key={index}>
                      <p className={`${Styles.challenge_subhead} mt-4`}>
                        {data?.head}
                      </p>
                      {data?.body?.map((e, ind) => (
                        <p
                          key={ind}
                          className={`${Styles.casestudy_pts2} text-white`}
                        >
                          <span>
                            <img
                              src="/src/assets/casestudy/whitebulletine.svg"
                              className="img-fluid me-2"
                              alt=""
                            />
                          </span>
                          {e}
                        </p>
                      ))}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
            <div className="mt-5">
              <p className={Styles.customer_challenge}>Business outcome</p>
              {caseStudyCus?.results?.map((data, index) => (
                <div key={index}>
                  <p className={Styles.challenge_subhead}>{data?.head}</p>
                  {data?.body?.map((e, ind) => (
                    <p key={ind} className={Styles.casestudy_pts}>
                      <span>
                        <img
                          src="/src/assets/casestudy/bulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      {e}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {caseStudyCus?.conclusion ? (
              <Card className={`mt-5 ${Styles.conclution_card}`}>
                <Card.Body>
                  <p
                    className={`text-center mt-2 ${Styles.customer_challenge}`}
                  >
                    Conclusion
                  </p>

                  <p className={`px-2 pb-2 ${Styles.casestudy_pts}`}>
                    {caseStudyCus?.conclusion}
                  </p>
                </Card.Body>
              </Card>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <ContactUs />?
      </Container>
    </div>
  );
};

export default CaseStudy;
