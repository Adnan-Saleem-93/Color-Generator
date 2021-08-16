import React from "react";
import "../css/input-section.css";
import {InputGroup, FormControl, Button} from "react-bootstrap";

const InputSection = () => {
  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="Enter Color: (e.g., #ffffff or white)"
          aria-label="Color-Input"
          aria-describedby="color-input"
          autoFocus={true}
        />
        <Button id="btn-color-submit">Submit</Button>
      </InputGroup>
    </>
  );
};

export default InputSection;