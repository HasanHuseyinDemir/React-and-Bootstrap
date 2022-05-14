import React from "react";

export default function Accordion(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + props.id}
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          {props.title}
        </button>
      </h2>
      <div
        id={props.id}
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{props.children}</div>
      </div>
    </div>
  );
}
