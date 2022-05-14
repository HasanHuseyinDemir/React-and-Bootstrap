import React from "react";

export default function Progress(props) {
  return (
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: props.percent + "%" }}
        aria-valuenow={props.percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
