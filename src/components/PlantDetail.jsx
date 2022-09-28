import React from 'react'
import DataIcons from "./icons/DataIcons";
import Icon from "./icons/Icon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function PlantDetail() {
  return (
    <>
 <Row className="pt-5"></Row>
            <Row className="justify-content-center">
              <DataIcons type="plant" />
              <div className="d-flex justify-content-center">
                <h3 className="pt-3">Plant Details</h3>
              </div>
              <hr className="line" />
            </Row>
            <Row className="d-flex justify-content-center">
              <Icon icon_name="plant.png" h="200px" w="200px" />
            </Row>
            <Row className="box-row">
              <Col md={1}></Col>
              <Col md={5} className="fluid card-bg-1">
                <div className="p-3">
                  <p>
                    Ocimum tenuiflorum [or Ocimum sanctum L.], commonly known as
                    holy basil, tulsi or tulasi.
                  </p>
                </div>
              </Col>
              <Col md={5} className="fluid card-bg-2">
                <div className="p-3">
                  <p>
                    It is an aromatic perennial plant in the family Lamiaceae.
                  </p>
                </div>
                
              </Col>

              <Col md={1}>

              </Col>
              
            </Row>
            <Row>
                <br/>
                <br/>
    
            </Row>
    </>
  )
}

export default PlantDetail