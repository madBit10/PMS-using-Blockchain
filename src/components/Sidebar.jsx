import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Icon from "./icons/Icon";
import Col from "react-bootstrap/Col";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { BsInfoSquareFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { hover } from "@testing-library/user-event/dist/hover";

function Sidebar() {
  //offcanvas states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Style variables
  const primaryButton = {
    backgroundColor: "#6eb0b2",
    // width: "300px",
  };
  const background = {
    backgroundColor: "rgba(244,248,249,255)",
  };
  


  return (
    <>
      <Col xs={1}>
        <h1>
          < GiHamburgerMenu className="nav-icons" onClick={handleShow}/>
        </h1>
      </Col>
      <Col xs={1}>
        <h1><TiHome className="nav-icons"/></h1>
      </Col>
      <Col xs={1}>
        <h1><BsInfoSquareFill className="nav-icons"/></h1>
      </Col>
      <Col xs={1}>
        <h1><ImStatsDots className="nav-icons"/></h1>
      </Col>
      <Offcanvas show={show} onHide={handleClose} style={{ width: "200px" }}>
        <Offcanvas.Header closeButton style={background}>
          <Offcanvas.Title>
            <Icon icon_name="logo.jpg" h="5rem" w="5rem" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="link">Home</Nav.Link>
            <Nav.Link className="link">About</Nav.Link>
            <Nav.Link className="link">Stats</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
