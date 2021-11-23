import { useContext } from "react";
import { Table } from "react-bootstrap";
import { DashboardContext } from "./../contexts";

import Row from "./Row";

function StatusTable() {
  const { dashboardState } = useContext(DashboardContext);

  const terminalColumns = Array.from({ length: 32 }).map((_, index) => {
    return {
      dataIndex: "T" + (index + 1),
    };
  });

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Direction</th>
            <th>Passengers</th>
            {terminalColumns.map((val, index) => (
              <th key={val.dataIndex}>{val.dataIndex}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dashboardState.map((train) => {
            return (
              <Row
                key={train.name}
                name={train.name}
                position={train.terminal}
                direction={train.direction}
                passengers={train.passengers}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default StatusTable;
