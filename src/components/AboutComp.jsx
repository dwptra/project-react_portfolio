import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

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
              As a graduate of Wikrama Bogor Vocational School with a major in
              Engineering Software (RPL), I have skills in development website
              with full stack developer. However, my main focus is as a backend
              developer. I once served as QA manager and full stack developer,
              as well as leading the current team PKL/Internship at PT Loolin
              Mandiri Indonesia. During this period, we succeeded in creating a
              web application that is used online internally by the company. I
              also have experience as leader and backend developer in the
              project, namely Information Systems Wikrama Library.
            </p>
            <p>
              Apart from technical skills, I have communication and skills
              strong teamwork. My effective leadership has been help the team
              achieve goals efficiently. I always try to improve my abilities
              and professionalism through continuous learning.
            </p>
            <a
              href="https://drive.google.com/file/d/1VqeB7qfbtxDpC8raarDjPKtv-H0op_H2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              Download CV
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
                  href="https://www.linkedin.com/in/dwi-putra-47203b261/"
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
