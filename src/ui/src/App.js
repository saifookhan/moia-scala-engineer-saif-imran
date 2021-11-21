import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import StatusTable from "./components/StatusTable";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <StatusTable />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
