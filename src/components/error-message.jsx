import React from "react";
import {ToastContainer, Alert} from "react-bootstrap";
import "../css/error-message.css";

const ErrorMessage = ({show, message, color, onCLose}) => {
  return (
    <ToastContainer className="p-3" position="bottom-center">
      <Alert
        variant="danger"
        onClose={() => {
          onCLose(false);
        }}
        dismissible
        show={show}
      >
        <Alert.Heading>Error</Alert.Heading>
        <p>
          {message} <b style={{color: "rgb(204 205 246)"}}>{color}</b>
        </p>
        <p className="sub-text-error">Please enter a valid Color</p>
      </Alert>
    </ToastContainer>
  );
};

export default ErrorMessage;
