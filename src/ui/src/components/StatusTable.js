import React from "react";
// import { Table, Tag, Space } from "antd";
import { Table } from "react-bootstrap";

import Row from "./Row";

function StatusTable(props) {
  const columns = [
    {
      title: "Direction",
      dataIndex: "Direction",
      key: "Direction",
      render: (text) => <a>{text}</a>,
      fixed: "left",
      width: 70,
    },
    {
      title: "T1",
      dataIndex: "T1",
      key: "T1",
      width: 50,
    },
    {
      title: "T2",
      dataIndex: "T2",
      key: "T2",
      width: 50,
    },
    {
      title: "T3",
      dataIndex: "T3",
      key: "T3",
      width: 50,
    },
    {
      title: "T4",
      dataIndex: "T4",
      key: "T4",
      width: 50,
    },
    {
      width: 50,
      title: "T5",
      dataIndex: "T5",
      key: "T5",
    },
    {
      title: "T6",
      width: 50,
      dataIndex: "T6",
      key: "T6",
    },
    {
      title: "T7",
      width: 50,
      dataIndex: "T7",
      key: "T7",
    },
    {
      title: "T8",
      width: 50,
      dataIndex: "T8",
      key: "T8",
    },
    {
      title: "T9",
      width: 50,
      dataIndex: "T9",
      key: "T9",
    },
    {
      title: "T10",
      width: 60,
      dataIndex: "T10",
      key: "T10",
    },
    {
      title: "T11",
      width: 60,
      dataIndex: "T11",
      key: "T11",
    },
    {
      title: "T12",
      width: 60,
      dataIndex: "T12",
      key: "T12",
    },
    {
      title: "T13",
      width: 60,
      dataIndex: "T13",
      key: "T13",
    },
    {
      title: "T14",
      dataIndex: "T14",
      width: 60,
      key: "T14",
    },
    {
      title: "T15",
      width: 60,
      dataIndex: "T15",
      key: "T15",
    },
    {
      title: "T16",
      width: 60,
      dataIndex: "T16",
      key: "T16",
    },
    {
      title: "T17",
      width: 60,
      dataIndex: "T17",
      key: "T17",
    },
    {
      title: "T18",
      width: 60,
      dataIndex: "T18",
      key: "T18",
    },
    {
      title: "T19",
      width: 60,
      dataIndex: "T19",
      key: "T19",
    },
    {
      title: "T20",
      width: 60,
      dataIndex: "T20",
      key: "T20",
    },
    {
      title: "T21",
      dataIndex: "T21",
      width: 60,
      key: "T21",
    },
    {
      title: "T22",
      width: 60,
      dataIndex: "T22",
      key: "T22",
    },
    {
      title: "T23",
      dataIndex: "T23",
      width: 60,
      key: "T23",
    },
    {
      title: "T24",
      width: 60,
      dataIndex: "T24",
      key: "T24",
    },
    {
      title: "T25",
      width: 60,
      dataIndex: "T25",
      key: "T25",
    },
    {
      width: 60,
      title: "T26",
      dataIndex: "T26",
      key: "T26",
    },
    {
      width: 60,
      title: "T27",
      dataIndex: "T27",
      key: "T27",
    },
    {
      width: 60,
      title: "T28",
      dataIndex: "T28",
      key: "T28",
    },
    {
      title: "T29",
      dataIndex: "T29",
      width: 60,
      key: "T29",
    },
    {
      title: "T30",
      dataIndex: "T30",
      key: "T30",
      width: 60,
    },
    {
      title: "T31",
      width: 60,
      dataIndex: "T31",
      key: "T31",
    },
    {
      title: "T32",
      width: 60,
      dataIndex: "T32",
      key: "T32",
    },
  ];

  const data = [
    {
      key: "1",
      name: "1",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "2",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "3",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {columns.map((val, index) => (
              <th key={val.dataIndex}>{val.dataIndex}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row position={2} direction={true} />
          <Row position={1} direction={false} />
        </tbody>
      </Table>
    </div>
  );
}

export default StatusTable;
