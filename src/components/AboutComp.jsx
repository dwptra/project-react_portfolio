import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

import DataAbout from '../data/DataAbout';

const About = () => {
    return (
      <div className="about text-black mb-3" id="about">
        {DataAbout.map((item) => (
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
                <img className="img-thumbnail w-100" src={item.img} alt="" />
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
                    <b className="text-primary">MUHAMAD DWI</b> PUTRA
                    NOVRIANSYAH
                  </strong>
                </h1>
                <p>{item.description}</p>
                <a
                  href={item.cvDownload}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  Download CV
                </a>
                <ul>
                  <li>
                    <a href={item.instagram} target="_blank" rel="noreferrer">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href={item.youtube} target="_blank" rel="noreferrer">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
}

export default About