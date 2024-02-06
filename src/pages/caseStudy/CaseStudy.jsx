import React from "react";
import Styles from "./CaseStudy.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const CaseStudy = () => {
  return (
    <div className={Styles.casestudy}>
      <Row className={Styles.hero_bg}>
        <Col>
          <Container className="py-4">
            <p className={`text-center ${Styles.case_study_head}`}>
              CASE STUDIES
            </p>
            <p className={`text-center ${Styles.page_head}`}>
              Streamlining Database Management and Migration for Enhanced Fault
              Tolerance
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

        <Row className="px-xl-5">
          <Col>
            <Card className={`mt-5 ${Styles.client_req_card}`}>
              <Card.Body className="text-center">
                <p className={`${Styles.client_head}`}>Client Overview</p>
                <p className={`${Styles.client_body}`}>
                  Our client has challenges in maintaining on-premise databases
                  and sought assistance in migrating from SQL to PostgreSQL.
                  Recognizing the need for a more robust and fault-tolerant
                  database solution, we provided a comprehensive strategy to
                  migrate the database to AWS using AWS Database Migration
                  Service (DMS) and ensure fault tolerance.
                </p>
              </Card.Body>
            </Card>
            <div className="mt-5">
              <p className={Styles.customer_challenge}>
                Customer-Facing Challenge
              </p>
              <div>
                <p className={Styles.challenge_subhead}>
                  Limited Cloud Expertise
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  Had minimal experience with AWS, hindering their ability to
                  capitalize on the advantages of cloud services.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  On-Premise Cost Challenges
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  The client faced escalating costs associated with maintaining
                  and upgrading on-premise infrastructure, including storage and
                  server expenses.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  Scalability Constraints
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  The existing on-premise setup struggled to scale efficiently,
                  impacting the performance and responsiveness of the
                  application during periods of increased demand.
                </p>
              </div>
            </div>
            <div>
              <Card className={`mt-5 ${Styles.client_sol_card}`}>
                <Card.Body className="p-5">
                  <p className={`${Styles.client_head}`}>
                    Solution Implementation
                  </p>
                  <div>
                    <p className={`${Styles.challenge_subhead} mt-4`}>
                      AWS Cloud Migration
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Conducted a comprehensive assessment of application and
                      determined a suitable migration strategy to AWS.
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Utilized AWS Migration Hub to track and manage the
                      migration process, ensuring minimal disruption to ongoing
                      business operations.
                    </p>
                  </div>

                  <div>
                    <p className={`${Styles.challenge_subhead} mt-5`}>
                      Infrastructure as Code (IaC) with CloudFormation
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Implemented Infrastructure as Code using AWS
                      CloudFormation to automate the provisioning of AWS
                      resources.
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      This allowed for consistent and repeatable infrastructure
                      deployment, streamlining the migration process.
                    </p>
                  </div>

                  <div>
                    <p className={`${Styles.challenge_subhead} mt-5`}>
                      Cost-Effective Storage with Amazon S3
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Migrated on-premise data storage to Amazon S3, taking
                      advantage of scalable, durable, and cost-effective object
                      storage.
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Implemented lifecycle policies to automatically transition
                      data to lower-cost storage classes when appropriate.
                    </p>
                  </div>

                  <div>
                    <p className={`${Styles.challenge_subhead} mt-5`}>
                      Web Application Hosting with Amazon CloudFront
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Leveraged Amazon CloudFront for content delivery to
                      enhance the performance and reduce latency for end-users.
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Configured CloudFront to distribute the web application
                      content globally, improving the user experience.
                    </p>
                  </div>

                  <div>
                    <p className={`${Styles.challenge_subhead} mt-5`}>
                      Microservices Architecture with Amazon RDS
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Redesigned the application architecture into a
                      microservices model.
                    </p>
                    <p className={`${Styles.casestudy_pts2} text-white`}>
                      <span>
                        <img
                          src="src/assets/casestudy/whitebulletine.svg"
                          className="img-fluid me-2"
                          alt=""
                        />
                      </span>
                      Utilized Amazon RDS (Relational Database Service) to host
                      and manage databases, ensuring scalability, high
                      availability, and simplified database administration.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-5">
              <p className={Styles.customer_challenge}>Business outcome</p>
              <div>
                <p className={Styles.challenge_subhead}>
                  Cloud Expertise and Cost Reduction
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  Gained valuable AWS expertise, enabling them to efficiently
                  manage and optimize their cloud resources.
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  The migration to AWS resulted in significant cost savings by
                  eliminating on-premise infrastructure expenses.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  Scalability and Performance Improvement
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  The microservices architecture and AWS infrastructure allowed
                  for seamless scalability, ensuring optimal performance during
                  varying workloads.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  Reliable and Cost-Effective Storage
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  Amazon S3 provided a reliable and cost-effective solution for
                  data storage, with the added benefit of scalability and
                  durability.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  Global Content Delivery
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  Amazon CloudFront improved the application's global
                  accessibility, reducing latency and enhancing the overall user
                  experience.
                </p>
              </div>
              <div>
                <p className={Styles.challenge_subhead}>
                  Simplified Database Management
                </p>
                <p className={Styles.casestudy_pts}>
                  <span>
                    <img
                      src="src/assets/casestudy/bulletine.svg"
                      className="img-fluid me-2"
                      alt=""
                    />
                  </span>
                  Amazon RDS simplified database administration, offering
                  automated backups, high availability, and the flexibility to
                  scale resources based on demand.
                </p>
              </div>
            </div>

            <Card className={`mt-5 ${Styles.conclution_card}`}>
              <Card.Body>
                <p className={`text-center mt-2 ${Styles.customer_challenge}`}>
                  Conclusion
                </p>

                <p className={`px-2 pb-2 ${Styles.casestudy_pts}`}>
                  In conclusion, the migration of on premises applications to
                  AWS, coupled with the implementation of Infrastructure as Code
                  and strategic use of AWS services, resulted in a more
                  cost-effective, scalable, and performant infrastructure. The
                  client is now well-positioned to adapt and grow in the dynamic
                  cloud environment
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudy;
