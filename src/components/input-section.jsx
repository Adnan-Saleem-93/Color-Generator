import React, {useState} from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";

const InputSection = ({onSubmit, initialColor}) => {
  const [color, setColor] = useState(initialColor);
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(color);
    }
  };

  return (
    <>
      <FormControl
        value={color}
        placeholder="Enter Color: (e.g., #ffffff or white)"
        aria-label="Color-Input"
        aria-describedby="color-input"
        autoFocus={true}
        id="color-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button id="btn-color-submit" onClick={() => onSubmit(color)}>
        Submit
      </Button>
    </>
  );
};

export default InputSection;
