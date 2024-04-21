import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function SkillCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Akanksha Singh </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />I am currently employed as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juza Cloud</span>.
            <br />
            I have completed my BTech CSE from JNTU, Hyderabad, India.
            <br />I have more than{" "}
            <span className="purple">
              {" "}
              5 years of professional experience in Software Industry
            </span>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight />
              Traveling
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span className="purple">
                <strong>EXPLORING NEW TECH STACK</strong>
              </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akanksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
