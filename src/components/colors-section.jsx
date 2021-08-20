import React from "react";
import {useEffect} from "react";
import "../css/colors-section.css";
import SingleColor from "./single-color";

const Colors = ({colorList}) => {
  useEffect(() => {}, [colorList]);
  return (
    <>
      {colorList.map((color, index) => {
        return <SingleColor key={index} {...color} />;
      })}
    </>
  );
};

export default Colors;
