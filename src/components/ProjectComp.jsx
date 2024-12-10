import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Perpustakaan from "../assets/project/perpustakaan.png";
import Paramedic from "../assets/project/paramedic.png";
import LeadsGeneration from "../assets/project/leadsgeneration.png";
import BlockManager from "../assets/project/blockmanager.png";
import SMM from "../assets/project/smm.png";
import MCP from "../assets/project/mcp.png";

const CustomPrevArrow = (props) => (
  <button className="custom-prev-arrow btn btn-dark" onClick={props.onClick}>
    Prev
  </button>
);

const CustomNextArrow = (props) => (
  <button className="custom-next-arrow btn btn-dark" onClick={props.onClick}>
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
          Top Projects
        </h2>
        <Slider {...settings}>
          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={Paramedic} alt="Library" />
              </div>
              <div className="card-content">
                <h3 className="px-1">Paramedic</h3>
                <p className="px-1">
                  This project is designed to create an integrated hospital application that supports the digital transformation of the hospital system. This application aims to replace the existing manual system with an efficient digital solution, supporting the management of patient data, medical services, administration, and operations in an integrated manner.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={Perpustakaan} alt="Library" />
              </div>
              <div className="card-content">
                <h3 className="px-1">System Information Library Wikrama</h3>
                <p className="px-1">
                  This project aims to create a library management system that
                  is easily accessible to staff and visitors with a responsive
                  and user friendly display.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={LeadsGeneration} alt="Leads Generation" />
              </div>
              <div className="card-content">
                <h3 className="px-1">Leads Generation</h3>
                <p className="px-1">
                  This application allows recording and managing various types
                  of leads. Users can easily input, track and organize lead
                  information, as well as monitor the development and status of
                  each lead in the sales process.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={BlockManager} alt="Block Manager" />
              </div>
              <div className="card-content">
                <h3 className="px-1">Block Manager</h3>
                <p className="px-1">
                  Block Manager is an application designed to help project
                  managers when conducting interviews with clients. This
                  application provides various features that support the
                  interview process and project management efficiently.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={SMM} alt="Social Media and Marketplace Booster" />
              </div>
              <div className="card-content">
                <h3 className="px-1">Social Media and Marketplace Booster</h3>
                <p className="px-1">
                  This application is designed to help businesses in buying and
                  selling Social Media and Marketplace Booster. This application
                  provides a platform that makes it easy for users to buy and
                  sell social media and marketplace enhancement services, such
                  as increasing the number of followers, likes, reviews, and
                  other interactions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card-container my-3"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="card mx-3">
              <div className="card-top">
                <img src={MCP} alt="Maritime Cloud Platform" />
              </div>
              <div className="card-content">
                <h3 className="px-1">Maritime Cloud Platform</h3>
                <p className="px-1">
                  Maritime Cloud Platform is an application designed to
                  facilitate management and operations in the maritime industry.
                  This application provides various features that help in data
                  management, communication and monitoring of ships and related
                  activities.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default ProjectComp;
