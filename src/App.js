import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from "./components/input-section";
import Colors from "./components/colors-section";
import {Row, Col} from "react-bootstrap";

function App() {
  const [colorValue, setColorValue] = useState("");
  const handleSubmit = (color) => {
    setColorValue(color);
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
        <Colors color={colorValue} />
      </Row>
    </>
  );
}

export default App;
