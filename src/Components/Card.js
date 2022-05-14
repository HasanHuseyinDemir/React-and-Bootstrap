import React from "react";

export default function Card(props) {
  return (
    <div class="card" style={{ width: "16rem", margin: "5px" }}>
      <img
        src={props.src}
        class="card-img-top card-image mt-3"
        alt={props.alt}
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.children}</p>
      </div>
    </div>
  );
}
