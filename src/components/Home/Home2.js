import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              plentiful, I think… 🤷‍♂️
              <br />
              <br />I am highly motivated individual with over 5 years of
              diverse experience
              <i>
                <b className="purple">
                  {" "}
                  in developing and implementing software solutions.{" "}
                </b>
              </i>
              <br />
              <br />
              Proven expertise in developing, testing and debugging &nbsp;
              <i>
                <b className="purple">high performing software solutions </b>{" "}
                with a keen eye for <b className="purple">detail.</b>
              </i>
              <br />
              <br />I have excellent <b className="purple">
                problem-solving
              </b>{" "}
              and
              <i>
                <b className="purple"> communication skills</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple">
                  {" "}
                  demonstrates a passion for learning and implementing new
                  technologies.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/akankshasingh9609/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akankshasingh_ak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
