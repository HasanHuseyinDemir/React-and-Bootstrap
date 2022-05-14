import React, { useState } from "react";
import Progress from "../Progress";

export default function ProgressSample() {
  const [progress, setProgress] = useState(0);
  const progressValue = (e) => {
    setProgress(e.target.value);
  };
  return (
    <div className="App container mt-3 border p-4">
      <h1>Progress Sample</h1>
      <input type="number" onChange={progressValue} />
      <p>Progress Bar : {progress}%</p>
      <Progress percent={progress} />
    </div>
  );
}
