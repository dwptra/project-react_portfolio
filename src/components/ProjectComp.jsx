import React from 'react';
import Slider from "react-slick";
import Container from "react-bootstrap/Container"

import DataProject from "../data/DataProject";

const CustomPrevArrow = (props) => (
  <button className='custom-prev-arrow btn btn-dark' onClick={props.onClick}>
    Prev
  </button>
);

const CustomNextArrow = (props) => (
  <button className='custom-next-arrow btn btn-dark' onClick={props.onClick}>
    Next
  </button>
);

const ProjectComp = () => {
  const settings = {
    className: "center",
    // dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="project min-vh-100 mt-5" id="project">
      <Container fluid="xl">
        <h2
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          My Projects
        </h2>
        <Slider {...settings}>
          {DataProject.map((item) => (
            <div
              className="card-container my-3"
              data-aos="fade-up"
              data-aos-duration="500"
              key={item.id}
            >
              <div className="card mx-3">
                <div className="card-top">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3 className="px-1">{item.title}</h3>
                  <p className="px-1">{item.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.git}
                  >
                    See Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default ProjectComp;
