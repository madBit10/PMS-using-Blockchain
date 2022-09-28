import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataList from "./components/DataList";

import PlantDetail from "./components/PlantDetail";

function App() {
  //Firebase data
  const [data, setData] = useState({});

  //background color style
  const right_side = {
    backgroundColor: "#fafafa",
    opacity : "80%"
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      // console.log(data)
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={9}>
           <Row className="justify-content-center pt-0 navbar">
            <Sidebar/>
           </Row>
            <Row className="pt-2">
              <DataList data={data} />
            </Row>
          </Col>

          <Col sm={3} style={right_side}>
           <PlantDetail/>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default App;
