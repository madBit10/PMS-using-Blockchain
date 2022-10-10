import React from "react";
import { Col, Row } from "react-bootstrap";
import BigGraph from "./BigGraph";
import TabularForm from "./TabularForm";

function Stats({ data }) {
  // console.log(data.data)

  return (
    <>
      <Col ></Col>
      <Col >
      <Row >
        <BigGraph data={data.data} /></Row>
        
        <Row>
        <TabularForm  data={data.data}/></Row>
      </Col>
      <Col></Col>
    </>
  );
}

export default Stats;
