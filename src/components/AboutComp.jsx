import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import CV from "../assets/cv.pdf";
import Img from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="about text-black mb-3" id="about">
      <Container>
        <Row>
          <Col
            lg="4"
            md="5"
            xs="1"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="d-flex justify-content-end about-img"
          >
            <img className="img-thumbnail w-100" src={Img} alt="" />
          </Col>
          <Col
            lg="8"
            md="7"
            xs="11"
            className="about-text"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <small className="mt-5">About me.</small>
            <h1>
              <strong>
                <b className="text-primary">MUHAMAD DWI</b> PUTRA NOVRIANSYAH
              </strong>
            </h1>
            <p>
              I am a graduate of SMK Wikrama Bogor with a focus on Software Development. I have 3 years of experience in the field.
            </p>
            <p>
              I have mastered various website development tools such as HTML, CSS, JavaScript, PHP, SQL, and NoSQL. I am an individual who is able to work well in a team, professional, able to learn quickly, and always eager to grow. I am committed to continuously improving my skills and giving the best contribution in every project I work on.
            </p>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              View CV
            </a>
            <ul>
              <li>
                <a
                  href="https://instagram.com/dwiputra.09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dwptra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/linkedin-dwiputra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
