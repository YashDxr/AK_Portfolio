import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiEclipseide } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
      </Col>
    </Row>
  );
}

export default Toolstack;
