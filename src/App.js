import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from "./components/input-section";
import {Row, Col} from "react-bootstrap";

function App() {
  return (
    <>
      <Row className="App">
        <Col md={3}>
          <h3>Color Generator</h3>
        </Col>
        <Col md={6} sm={9}>
          <InputSection />
        </Col>
      </Row>
      <Row></Row>
    </>
  );
}

export default App;
