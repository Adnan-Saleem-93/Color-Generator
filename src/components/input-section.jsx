import React, {useState, useEffect} from "react";
import "../css/input-section.css";
import {FormControl, Button} from "react-bootstrap";

const InputSection = ({onSubmit, initialColor}) => {
  const [color, setColor] = useState(initialColor);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    let input = document.getElementById("color-input");
    if (showError) {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ced4da";
    }
  }, [showError]);

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setShowError(false);
    if (color !== "") {
      onSubmit(color);
    } else {
      setShowError(true);
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
      <Button id="btn-color-submit" onClick={handleSubmit}>
        Submit
      </Button>
      {showError && <p id="input-error">Please enter a valid value</p>}
    </>
  );
};

export default InputSection;
