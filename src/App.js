import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataList from "./components/DataList";

function App() {
  //Firebase data
  const [data, setData] = useState({});

  //background color style
  const right_side = {
    backgroundColor: "#fafafa",
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data)
    });
  }, []);

  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col md={9}>
            <Row className="pt-3">
              <Col md={3}>
                <Sidebar />
              </Col>
            </Row>
            <DataList data= {data}/>
          </Col>
          <Col md={3} style={right_side}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
