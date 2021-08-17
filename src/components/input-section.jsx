import React, {useState} from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";

const InputSection = ({onSubmit}) => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <FormControl
        placeholder="Enter Color: (e.g., #ffffff or white)"
        aria-label="Color-Input"
        aria-describedby="color-input"
        autoFocus={true}
        onChange={handleChange}
      />
      <Button id="btn-color-submit" onClick={() => onSubmit(color)}>
        Submit
      </Button>
    </>
  );
};

export default InputSection;
