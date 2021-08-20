import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputSection from "./components/input-section";
import Colors from "./components/colors-section";
import {Row, Col} from "react-bootstrap";
import Values from "values.js";

function App() {
  const [colorList, setColorList] = useState(new Values("orange").all(10));
  const handleSubmit = (color) => {
    let newColorList = new Values(color).all(10);
    setColorList(newColorList);
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
    </>
  );
}

export default App;
