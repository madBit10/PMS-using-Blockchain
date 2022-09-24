import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'

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
            <Row className="justify-content-center">
            <Col sm={2}></Col>
              <Col sm={4}>
                <Card className='mt-3'>
                  <div className="p-3">
                    <FontAwesomeIcon  style ={{fontSize : '30px', color : '#646e95'}} icon={faWater} />
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className='mt-3'>
                  <div className="p-3">
                    <FontAwesomeIcon style ={{fontSize : '30px', color : '#b77f53'}} icon={faThermometerHalf} />
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className=" justify-content-center">
            <Col sm={2}></Col>
              <Col sm={4}>
                <Card className='mt-3'>
                  <div className="p-3">
                    <FontAwesomeIcon icon={faWater} />
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className='mt-3'>
                  <div className="p-3">
                    <FontAwesomeIcon  style ={{fontSize : '30px', color : '#395b5d'}} icon={faDroplet} />
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
