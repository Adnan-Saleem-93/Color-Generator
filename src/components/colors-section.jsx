import React from "react";
import "../css/colors-section.css";
import {Col} from "react-bootstrap";

const Colors = ({color}) => {
  const renderColorBoxes = () => {
    let boxes = [];
    let percentage = 100;
    while (percentage >= -100) {
      boxes.push(
        <Col lg={2} md={4} sm={6} xs={12} key={`box_${percentage}`} className="color-box">
          {percentage.toString().replace("-", "")}%
        </Col>
      );
      percentage -= 10;
      // percentage - i * 10 < 0 ? (percentage += i * 10) : (percentage -= i * 10);
    }
    return <>{boxes}</>;
  };

  return <>{renderColorBoxes()}</>;
};

export default Colors;
