import { useState, useEffect } from "react";

const Row = (props) => {
  const [trainPosition, setTrainPosition] = useState(props.position);
  const [trainDirection, setTrainDirection] = useState(props.direction);
  const [trainPassengers, setTrainPassengers] = useState(props.passengers);

  useEffect(() => {
    setTrainPosition(props.position);
    setTrainDirection(props.direction);
    setTrainPassengers(props.passengers);
  }, [props]);

  return (
    <tr
      style={{
        backgroundColor:
          trainPassengers === 0
            ? "#f0f0f0"
            : trainDirection
            ? "#bae7ff"
            : "#a0d911",
      }}
    >
      <td>{props.name}</td>
      <td>{trainDirection ? "RIGHT" : "LEFT"}</td>
      <td>{trainPassengers}</td>
      {/* parking + 32 */}
      {Array.from({ length: 33 }).map((_, index) => (
        <td key={index}>{trainPosition === index ? "🚆" : " "}</td>
      ))}
    </tr>
  );
};

export default Row;
