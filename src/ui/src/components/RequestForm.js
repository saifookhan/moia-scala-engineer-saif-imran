import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { requestATrain } from "../helpers/serverModule/serverModule";

function RequestForm() {
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState(15);

  const handleSave = async () => {
    if (parseInt(to, 10) > 32) {
      alert("TO must be <= 32");
    } else if (parseInt(from, 10) < 1) {
      alert("FROM must be >= 1");
    } else {
      try {
        await requestATrain(parseInt(from, 10), parseInt(to, 10));
      } catch (e) {
        alert("Please check entry");
      }
    }
  };

  useEffect(() => {}, [to, from]);

  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            From
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="numberfrom"
              placeholder="3"
              onChange={(e) => {
                console.log(e.target.value);
                setFrom(parseInt(e.target.value));
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            To
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="numberto"
              placeholder="25"
              onChange={(e) => {
                setTo(parseInt(e.target.value));
              }}
            />
          </Col>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={(e) => {
            handleSave();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RequestForm;
