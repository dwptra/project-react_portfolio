import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Profile from '../assets/profile.jpg';

const About = () => {
    return (
        <div className='about text-black mb-3' id='about'>
            <Container>
                <Row>
                    <Col lg='4' md='5' xs='1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='d-flex justify-content-end about-img'>
                        <img className='img-thumbnail w-100' src={Profile} alt="" />
                    </Col>
                    <Col lg='8' md='7' xs='11' className='about-text' data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                        <small className='mt-5'>About me.</small>
                        <h1><strong><b className='text-primary'>MUHAMAD DWI</b> PUTRA NOVRIANSYAH</strong></h1>
                        <p>
                            I am 16 years old, I live in Bogor, is a student of SMK Wikrama Bogor.
                            I'm pursuing expertise in the field of web developer, so I majored in PPLG.
                            In web development, I always try to create a clean, user-friendly interface, as well
                            focusing on functionality, so that the web that I build can be useful and function properly.
                        </p>
                        <a href="/#" className='btn btn-outline-light'>Download CV</a>
                        <ul>
                            <li>
                                <a href="https://instagram.com/dwiputra.09" target='_blank' rel="noreferrer"><FaInstagram/></a>
                            </li>
                            <li>
                                <a href="https://github.com/dwptra" target='_blank' rel="noreferrer"><FaGithub/></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/muhamad-dwi-putra-novriansyah-47203b261/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
                            </li>
                            <li>
                                <a href="/#"><FaYoutube/></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default About