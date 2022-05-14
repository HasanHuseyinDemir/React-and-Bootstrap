import React from "react";
import Alert from "../Alert.js";

export default function AlertsSample() {
  return (
    <>
      <Alert type="success">
        <h4>Success</h4> Alert
      </Alert>
      <Alert type="info">
        <h4>Info</h4> Alert
      </Alert>
      <Alert type="warning">
        <h4>Warning</h4> Alert
      </Alert>
      <Alert type="danger">
        <h4>Danger</h4> Alert
      </Alert>
      <Alert type="primary">
        <h4>Primary</h4> Alert
      </Alert>
      <Alert type="light">
        <h4>Light</h4> Alert
      </Alert>
      <Alert type="dark">
        <h4>Dark</h4> Alert
      </Alert>
    </>
  );
}
