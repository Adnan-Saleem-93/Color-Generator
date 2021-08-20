import React, {useState, useEffect} from "react";
import {Col} from "react-bootstrap";
import rgbToHex from "../utils/rgbToHex";

const SingleColor = ({rgb, weight}) => {
  const [hexValue, setHexValue] = useState("");
  const [textColor, setTextColor] = useState("lightgray");
  useEffect(() => {
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    setHexValue(rgbToHex(red, green, blue));
    let brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    setTextColor(brightness >= 128 ? "black" : "lightgray");
  }, []);

  return (
    <Col
      lg={2}
      md={4}
      sm={6}
      xs={12}
      key={`box_${weight}`}
      className="color-box"
      style={{backgroundColor: hexValue}}
    >
      <p className="percentage" style={{color: textColor}}>
        {weight}%
      </p>
      <p className="color-code" style={{color: textColor}}>
        {hexValue.toUpperCase()}
      </p>
    </Col>
  );
};

export default SingleColor;
