import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import StatusTable from "./components/StatusTable";
import RequestForm from "./components/RequestForm";
import { DashboardContextProvider } from "./contexts";

function App() {
  return (
    <DashboardContextProvider>
      <div className="App">
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <h2>WunderResie GmBH</h2>
              <h6>Dashboard updates every two seconds</h6>
              <p>
                <a
                  rel="noreferrer"
                  href="http://github.com/saifookhan"
                  target="_blank"
                >
                  @saifookhan
                </a>
              </p>
            </Col>
            <Col xs={3}>
              <RequestForm />
            </Col>
          </Row>

          <Row>
            <StatusTable />
          </Row>
        </Container>
      </div>
    </DashboardContextProvider>
  );
}

export default App;
