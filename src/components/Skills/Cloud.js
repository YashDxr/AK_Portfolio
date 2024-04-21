import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaAws } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiIbm } from "react-icons/si";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIbm />
      </Col>
    </Row>
  );
}

export default Cloud;
