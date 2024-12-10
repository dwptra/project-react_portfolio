import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certiport from "../assets/certificate/certiport.jpg";
import Dastronomi from "../assets/certificate/dastronomi.jpg";
import Gmetrix from "../assets/certificate/gmetrix.png";
import KaryawanTerbaik from "../assets/certificate/karyawanterbaik.jpg";
import PKL from "../assets/certificate/pkl.jpg";

const CertificateComp = () => {
  return (
    <div className="certificate min-vh-100 mt-5" id="certificate">
      <Container fluid="xl">
        <h2
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Certificates
        </h2>
        <Row
          className="certificate justify-content-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <Col className="p-3" lg="4" md="6" sm="12">
            <img className="w-100" src={Certiport} alt="" />
          </Col>
          <Col className="p-3" lg="4" md="6" sm="12">
            <img className="w-100" src={Gmetrix} alt="" />
          </Col>
          <Col className="p-3" lg="4" md="6" sm="12">
            <img className="w-100" src={KaryawanTerbaik} alt="" />
          </Col>
          <Col className="p-3" lg="4" md="6" sm="12">
            <img className="w-100" src={Dastronomi} alt="" />
          </Col>
          <Col className="p-3" lg="4" md="6" sm="12">
            <img className="w-100" src={PKL} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CertificateComp;
