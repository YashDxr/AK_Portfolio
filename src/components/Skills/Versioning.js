import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiSubversion } from "react-icons/si";

function Versioning() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCircleci />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSubversion />
      </Col>
    </Row>
  );
}

export default Versioning;
