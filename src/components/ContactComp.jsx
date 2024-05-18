import React from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactComp = () => {
  return (
    <div className="contact mt-5" id="contact">
      <Container>
        <div className="card p-4">
            <div className="card-title">
                <h1 className="text-center">Contact Me</h1>
            </div>
          <div className="card-body">
            <div className="d-flex justify-content-center flex-wrap">
                <a href="https://wa.me/+6283874793420" target="_blank" rel="noreferrer"><FaWhatsapp className="mx-3" style={{ fontSize: "3rem" }} /></a>
                <a href="mailto:muhamaddwiputranovriansyah@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="mx-3" style={{ fontSize: "3rem" }} /></a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactComp;
