import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

function Os() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />{" "}
      </Col>
    </Row>
  );
}

export default Os;
