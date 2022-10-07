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
  // const [humidLog, setHumidLog] = useState([0,0,0,0,0])
  //Sheets data
  const [sheets, setSheets] = useState([]);
  //getSheetsData
  const getSheetsData = async () =>{
    const response = await fetch('https://sheet.best/api/sheets/eec0a868-56b9-44ec-bcb5-c20e4057f747')
    const data = await response.json()
    return data
  }

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
      // let [,...temp] = humidLog
      // temp.push(data.Humidity)
      // setHumidLog(temp)
    });

    //get sheets data
    getSheetsData().then((data) => setSheets(data))
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
              <p>{}</p>
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
