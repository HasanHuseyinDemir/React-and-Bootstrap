import React from "react";

export default function Select(props) {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>{props.selected}</option>
      {props.children}
    </select>
  );
}
