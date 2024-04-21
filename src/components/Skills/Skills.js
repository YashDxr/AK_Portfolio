import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Skillcard from "./SkillCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Os from "./Os";
import Database from "./Database";
import Web from "./Web";
import Versioning from "./Versioning";
import Cloud from "./Cloud";
import Scripting from "./Scripting";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">am I?</strong>
            </h1>
            <Skillcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Languages </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">IDE's</strong>
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Operating Systems</strong>
        </h1>
        <Os />

        <h1 className="project-heading">
          <strong className="purple">Databases</strong>
        </h1>
        <Database />

        <h1 className="project-heading">
          <strong className="purple">Web Servers and Frameworks</strong>
        </h1>
        <Web />

        <h1 className="project-heading">
          <strong className="purple">Scripting Languages</strong>
        </h1>
        <Scripting />

        <h1 className="project-heading">
          <strong className="purple">Versioning Tools</strong>
        </h1>
        <Versioning />

        <h1 className="project-heading">
          <strong className="purple">Cloud Technologies</strong>
        </h1>
        <Cloud />
      </Container>
    </Container>
  );
}

export default Skills;
