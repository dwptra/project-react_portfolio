import { FaHtml5, FaCss3, FaLaravel, FaReact, FaBootstrap, FaGitAlt, FaDatabase  } from 'react-icons/fa';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import DataSkills from '../data/DataSkills';

const SkillsComp = () => {
  return (
    <div className="min-vh-100 skills mt-5" id="skills">
      {DataSkills.map((item) => (
        <Container>
          <Row>
            <Col
              lg="12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="text-center">Program Language and Tools</h2>
            </Col>
            <Col
              lg="12"
              md="12"
              xs="12"
              className="skill-icons d-flex justify-content-center pb-4"
            >
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="150"
              >
                <FaHtml5 className="item" title="HTML5" />
                <FaCss3 className="item" title="CSS" />
                <FaLaravel className="item" title="Laravel" />
                <FaReact className="item" title="React Js" />
                <FaBootstrap className="item" title="Bootstrap" />
                <FaGitAlt className="item" title="Git" />
                <FaDatabase className="item" title="Database" />
              </div>
            </Col>
            <Col
              lg="6"
              md="12"
              xs="12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              className="skill-persentase"
            >
              <h4 className="text-center text-info">Persentase</h4>
              <div className="pb-2">
                <small>HTML:</small>
                <ProgressBar
                  className="progress-bar"
                  variant="success"
                  now="90"
                  max={100}
                />
              </div>
              <div className="pb-2">
                <small>CSS:</small>
                <ProgressBar
                  className="progress-bar"
                  variant="success"
                  now="85"
                  max={100}
                />
              </div>
              <div className="pb-2">
                <small>Bootstrap:</small>
                <ProgressBar
                  className="progress-bar"
                  variant="success"
                  now="88"
                  max={100}
                />
              </div>
              <div className="pb-2">
                <small>Laravel:</small>
                <ProgressBar
                  className="progress-bar"
                  variant="success"
                  now="90"
                  max={100}
                />
              </div>
              <div className="pb-2">
                <small>React JS:</small>
                <ProgressBar
                  className="progress-bar"
                  variant="success"
                  now="68"
                  max={100}
                />
              </div>
            </Col>
            <Col
              lg="6"
              md="12"
              xs="12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              className="skill-description justify-content-center"
            >
              <h4 className="text-info text-center">Description</h4>
              <div className="d-flex align-items-center h-100 px-2">
                <p className="poppins text-start">{item.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}

export default SkillsComp