import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaSortDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='hero min-vh-100 w-100' id='hero' >
      <Container>
        <Row>
          <Col lg='12' md='12' sm='12' className='text-center hero-title'>
            {/* <p>👩‍🚀 "Muhamad Dwi Putra Novriansyah."</p> */}
            <h1 className='display-1'>Dwptra.</h1>
          </Col>
          <Col lg='12' md='12' sm='12' className='text-center hero-button'>
            <a href='#about' className='turn-on-animation'>Scroll Down!</a>
            <a href="#about" className='hero-icon scroll-down'><FaSortDown/></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero;