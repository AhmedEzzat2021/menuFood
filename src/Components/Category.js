import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Roll";

export const Category = ({ filterCateg, allCtaegory }) => {
  // Filter data by category
  const onFilter = cat => {
    filterCateg(cat);
  };
  return (
    <Row>
      <Col sm="12" className="d-flex justify-content-center mt-5 mb-3">
        {allCtaegory.length >= 1
          ? allCtaegory.map(item => {
              return (
                <Roll>
                  <button key={item} className="categoriez" onClick={() => onFilter(item)}>
                    {item}
                  </button>
                </Roll>
              );
            })
          : null}
      </Col>
    </Row>
  );
};
