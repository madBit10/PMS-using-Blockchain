import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataList from './components/DataList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantDetail from './components/PlantDetail';
import Stats from './components/Stats';
import AboutUs from './components/AboutUs';

function App() {
  //Firebase data
  const [data, setData] = useState({});
  
  //Sheets data
  const [sheets, setSheets] = useState([]);
  //getSheetsData
  const getSheetsData = async () => {
    const response = await fetch(
      'http://localhost:8081/api/getDetails'
    );
    const data = await response.json();
    return data;
  };

  //background color style
  const right_side = {
    backgroundColor: 'rgba(250,250,250,0.6)',
    height: '100vh',
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
    getSheetsData().then((data) => setSheets(data));
    
  }, []);

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="justify-content-center pt-0 navbar">
              <Sidebar />
            </Row>
            <Row className="pt-2">
              <Routes>
                <Route exact path="/" element={<DataList data={data} />} />
                <Route exact path="/stats" element={<Stats data={sheets} />} />
                <Route exact path="/aboutus" element={<AboutUs/>} />
              </Routes>
            </Row>
          </Col>

          <Col sm={3} style={right_side}>
            <PlantDetail/>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
