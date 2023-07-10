import React from 'react';
import Slider from "react-slick";
import Container from "react-bootstrap/Container"

import DataProject from "../data/DataProject";

const ProjectComp = () => {
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="project min-vh-100" id="project">
      <Container fluid="xl">
        <h2 className='text-center mb-5'>My Projects</h2>
        <Slider {...settings}>
          {DataProject.map((item) => (
            <div className="card-container">
              <div className="card mx-3">
                <div className="card-top">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3 className='px-1'>{item.title}</h3>
                  <p className='px-1'>{item.description}</p>
                </div>
                <div className="card-footer">
                  <a className='text-white' target='_blank' rel="noopener noreferrer" href={item.git}>See Project</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default ProjectComp