import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataList from "./components/DataList";
import LiveChart from "./components/LiveChart";

import PlantDetail from "./components/PlantDetail";
import Stats from "./components/Stats";

function App() {
  //Firebase data
  const [data, setData] = useState({});
  const [humidLog, setHumidLog] = useState([0, 0, 0, 0, 0]);
  //Sheets data
  const [sheets, setSheets] = useState([]);
  //getSheetsData
  const getSheetsData = async () => {
    const response = await fetch(
"https://script.google.com/macros/s/AKfycbzgE-vq7a7qQ-mCbD4NJVejdpCjHeF-_qiqdYSFD4uQ7c1CwuFpTfzbNMWr-Wh2zkvuTg/exec"    );
    const data = await response.json();
    return data;
  };

  //background color style
  const right_side = {
    backgroundColor: "rgba(250,250,250,0.6)",
    height: "100vh",
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
    getSheetsData().then((data) => setSheets(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const [, ...temp] = humidLog;
      // console.log(humidLog)
      temp.push(data.Humidity === undefined ? 0 : data.Humidity);
      setHumidLog(temp);
    }, 3000);
    return () => clearInterval(interval);
  }, [humidLog]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="justify-content-center pt-0 navbar">
              <Sidebar />
            </Row>
            <Row className="pt-2">
              {/* <DataList data={data} /> */}
              {/* <p>
                {humidLog[0]} {humidLog[1]} {humidLog[2]} {humidLog[3]}{" "}
                {humidLog[4]}
              </p> */}
              {/* <LiveChart data={humidLog} /> */}
              <Stats data={sheets} />

            </Row>
          </Col>

          <Col sm={3} style={right_side}>
            <PlantDetail />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
