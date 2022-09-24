import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataCards from "./DataCards";

const DataList = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={2}></Col>
        <Col sm={4}>
          <DataCards type="water" />
        </Col>
        <Col sm={4}>
          <DataCards type="temp" />
        </Col>
      </Row>
      <Row className=" justify-content-center">
        <Col sm={2}></Col>
        <Col sm={4}>
          <DataCards type="humid" />
        </Col>
        <Col sm={4}>
          <DataCards type="pump" />
        </Col>
      </Row>
    </>
  );
};

export default DataList;
