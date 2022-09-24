import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import DataList from "./components/DataList";
import DataIcons from "./components/icons/DataIcons";
import Icon from "./components/icons/Icon";

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

          <Col md={3} style={right_side}>
            <Row className="pt-5">
              </Row>
            <Row className="justify-content-center">
            <DataIcons type="plant"/>
            <div className="d-flex justify-content-center">
            <h3 className="pt-3">Plant Details</h3></div>
            <hr className="line"/>
            </Row>
            <Row className="d-flex justify-content-center">
            <Icon icon_name="plant.png" h="200px" w="200px" />
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col md={5} className="fluid card-bg-1"  >
            
              <div className="p-3">
                  <p>Ocimum tenuiflorum [or Ocimum sanctum L.], commonly known as holy basil, tulsi or tulasi.</p>
                </div>
            </Col>
            <Col md={5} className="fluid card-bg-2" >
              <div className="p-3">
                  <p>It is an aromatic perennial plant in the family Lamiaceae.</p>
                </div>
            </Col>
            <Col md={1}></Col>

            </Row>

          </Col>

        </Row>

      </Container>
    </>
  );
}

export default App;
