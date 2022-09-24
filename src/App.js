import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Icon from "./components/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'

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
            <Row className="pt-3 justify-content-center">
            <Col sm={2}></Col>
              <Col sm={4}>
                <Card>
                  <div className="p-3">
                    <Icon icon_name="Temperature.png" h="15%" w="15%" />
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className="pl-2">
                  <div className="p-3">
                    <Icon icon_name="humidity (3).png" h="15%" w="15%" />
                    <FontAwesomeIcon icon={faWaveSquare} />
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className=" justify-content-center">
            <Col sm={2}></Col>
              <Col sm={4}>
                <Card>
                  <div className="p-3">
                    <Icon icon_name="Temperature.png" h="15%" w="15%" />
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className="pl-2">
                  <div className="p-3">
                    <Icon icon_name="humidity (3).png" h="15%" w="15%" />
                    <FontAwesomeIcon icon="fa-solid fa-droplet-percent" />
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={3} style={right_side}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
