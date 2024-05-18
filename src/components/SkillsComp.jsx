import {
  FaHtml5,
  FaCss3,
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const SkillsComp = () => {
  return (
    <div className="min-vh-100 skills" id="skills">
      <Container>
        <Row>
          {/* <Col
            lg="6"
            md="12"
            xs="12"
            className="skill-icons pb-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="150"
          >
            <h4 className="text-center">Stacks</h4>
            <div className="text-center d-flex justify-content-center flex-wrap">
              <FaHtml5 className="item" title="HTML5" />
              <FaCss3 className="item" title="CSS & Tailwind CSS" />
              <FaBootstrap className="item" title="Bootstrap" />
              <FaLaravel className="item" title="Laravel & Lumen" />
              <FaReact className="item" title="React Js" />
              <FaGitAlt className="item" title="Github & Gitlab" />
              <FaNodeJs className="item" title="Express Js" />
              <FaDatabase className="item" title="MySql & PostgreSQL" />
              <FaFileExcel className="item" title="Excel & Sheets" />
              <FaFileWord className="item" title="Google Docs & Word" />
            </div>
          </Col> */}
          <Col
            lg="6"
            md="12"
            xs="12"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="skill-description justify-content-center"
          >
            <h4 className="text-info text-center">Stacks</h4>
            <div className="text-center d-flex justify-content-center flex-wrap">
              <FaHtml5 className="item" title="HTML5" />
              <FaCss3 className="item" title="CSS & Tailwind CSS" />
              <FaBootstrap className="item" title="Bootstrap" />
              <FaLaravel className="item" title="Laravel & Lumen" />
              <FaReact className="item" title="React Js" />
              <FaGitAlt className="item" title="Github & Gitlab" />
              <FaNodeJs className="item" title="Express Js" />
              <FaDatabase className="item" title="MySql & PostgreSQL" />
              <FaFileExcel className="item" title="Excel & Sheets" />
              <FaFileWord className="item" title="Google Docs & Word" />
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
              <p className="poppins text-start">
                UndIn the frontend field I have experience using Tailwind CSS,
                Bootstrap, React JS. My ability is to convert designs into code,
                creating responsive and attractive displays. In the Backend
                field, I have experience using Laravel, Lumen, and Express JS
                Sequelize. In database management, I have experience using
                MySql, Postgresql, and Sqlite. In the QA field, I have
                experience using Word and Excel to create QC documents.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillsComp;
