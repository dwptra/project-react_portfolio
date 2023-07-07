import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer w-100 vh-5 mt-5'>
      <Container>
        <Row>
          <Col>
            <p className='text-center'>&copy; Dwi Putra - 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;