import React, { useState } from "react";

const Row = (props) => {
  const [trainPosition, setTrainPosition] = useState(props.position);
  const [trainDirection, setTrainDirection] = useState(props.direction);

  return (
    <tr style={{ backgroundColor: trainDirection ? "#bae7ff" : "#a0d911" }}>
      <td>{props.name}</td>
      <td>{trainDirection ? "RIGHT" : "LEFT"}</td>
      {Array.from({ length: 32 }).map((_, index) => (
        <td key={index}>{trainPosition === index ? "🚆" : " "}</td>
      ))}
    </tr>
  );
};

export default Row;
