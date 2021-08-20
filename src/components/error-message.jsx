import React from "react";
import {ToastContainer, Alert} from "react-bootstrap";
import "../css/error-message.css";

const ErrorMessage = ({show, message, onCLose}) => {
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
        <p>{message}</p>
      </Alert>
    </ToastContainer>
  );
};

export default ErrorMessage;
