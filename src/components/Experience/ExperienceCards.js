import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExperienceCards(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleClose = () => {
    setShowMore(false);
  };

  const renderDescription = () => {
    const points = props.description.split("<br/>");
    const firstTwoPoints = points.slice(0, 2).join("<br/>");
    const remainingPoints = points.slice(2).join("<br/>");

    return (
      <>
        <Card.Text
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: firstTwoPoints }}
        />
        {points.length > 2 && (
          <Button variant="link" onClick={handleShowMore}>
            Show More
          </Button>
        )}

        <Modal show={showMore} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {props.company} - {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Text
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: remainingPoints }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong className="purple">{props.company}</strong>
        </Card.Title>
        <Card.Title>
          <i>{props.title}</i>
        </Card.Title>
        <Card.Title style={{ color: "red" }}>{props.timeline}</Card.Title>
        {renderDescription()}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;
