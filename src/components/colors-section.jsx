import React from "react";
import "../css/colors-section.css";
import {Col} from "react-bootstrap";

const Colors = () => {
  const renderColorBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 21; i++) {
      boxes.push(
        <Col lg={2} md={4} sm={6} xs={12} key={i + 1} className="color-box">
          Box {i + 1}
        </Col>
      );
    }
    return <>{boxes}</>;
  };

  return <>{renderColorBoxes()}</>;
};

export default Colors;
