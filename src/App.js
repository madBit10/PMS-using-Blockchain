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
  const [humidLog, setHumidLog] = useState([0,0,0,0,0])

  //background color style
  const right_side = {
    backgroundColor: "rgba(250,250,250,0.6)",
    height : "100vh"
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
      let [,...temp] = humidLog
      temp.push(data.Humidity)
      setHumidLog(temp)
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
              <h1>{humidLog[0]}</h1>
              <h1>{humidLog[1]}</h1>
              <h1>{humidLog[2]}</h1>
              <h1>{humidLog[3]}</h1>
              <h1>{humidLog[4]}</h1>
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
