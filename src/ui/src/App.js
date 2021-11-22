import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import StatusTable from "./components/StatusTable";
import { DashboardContextProvider } from "./contexts";

function App() {
  return (
    <DashboardContextProvider>
      <div className="App">
        <Container>
          <Row>
            <StatusTable />
          </Row>
        </Container>
      </div>
    </DashboardContextProvider>
  );
}

export default App;
