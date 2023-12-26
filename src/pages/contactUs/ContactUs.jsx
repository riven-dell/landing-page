import React from "react";
import Styles from "./ContactUsStyles.module.css";
import { Button, Container } from "react-bootstrap";
import ContactUsForm from "../../components/contactUsForm/ContactUsFOrm";

const ContactUs = () => {
  return (
    <>
      <div className={Styles.contact_header}>
        <Container className="text-center py-5">
          <Button className={`px-4 ${Styles.Contact_dummy_btn}`}>
            Contact Us
          </Button>
          <p className={Styles.conatct_headers}>We are always open to talk</p>
          <p className={Styles.conatct_subtext}>
            We Will respond within 5 Hours
          </p>
        </Container>
      </div>
      <ContactUsForm />
    </>
  );
};

export default ContactUs;
