import React from "react";
import { Row, Col } from "react-bootstrap";

export const HeaderTitle = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <h2 className="titlePage">قائمة الطعام</h2>
      </Col>
    </Row>
  );
};
