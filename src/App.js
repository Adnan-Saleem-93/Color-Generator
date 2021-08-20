import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from "./components/input-section";
import Colors from "./components/colors-section";
import {Row, Col} from "react-bootstrap";
import ErrorMessage from "./components/error-message";
import Values from "values.js";

function App() {
  const [colorList, setColorList] = useState(new Values("black").all(10));
  const [showError, setShowError] = useState(false);
  const errorMessage = "Failed to generate colors for specified input";
  const handleSubmit = (color) => {
    try {
      let newColorList = new Values(color).all(10);
      setColorList(newColorList);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      console.error(error);
    }
  };

  const handleErrorClose = (value) => {
    setShowError(value);
  };

  return (
    <>
      <Row className="App">
        <Col md={3}>
          <h3>Color Generator</h3>
        </Col>
        <Col md={9} sm={12}>
          <InputSection onSubmit={handleSubmit} />
        </Col>
      </Row>
      <Row>
        <Colors colorList={colorList} />
      </Row>
      {showError && (
        <ErrorMessage show={showError} message={errorMessage} onCLose={handleErrorClose} />
      )}
    </>
  );
}

export default App;
