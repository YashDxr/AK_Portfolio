import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function Scripting() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeXml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
    </Row>
  );
}

export default Scripting;
