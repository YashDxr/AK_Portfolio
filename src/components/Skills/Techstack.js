import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { BsFiletypeXml } from "react-icons/bs";
import { SiJunit5 } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCpp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeXml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
    </Row>
  );
}

export default Techstack;
