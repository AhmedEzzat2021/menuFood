import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export const CardList = ({ myItems }) => {
  return (
    <Row>
      {myItems.length >= 1 ? (
        myItems.map(item => {
          return (
            <Col sm="12" className="my-3" key={item.id}>
              <Zoom>
                <Card className="d-flex flex-row shadow-sm">
                  <Card.Img variant="" src={item.imgUrl} className="image_card" sm="9" />
                  <Card.Body>
                    <div className="d-flex flex-row justify-content-between align-center mb-3">
                      <Card.Title>{item.title}</Card.Title>
                      <span className="price">{item.price}</span>
                    </div>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Zoom>
            </Col>
          );
        })
      ) : (
        <h3>لا توجد أصناف</h3>
      )}
    </Row>
  );
};
