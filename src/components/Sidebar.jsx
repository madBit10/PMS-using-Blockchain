import React from 'react'
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import Nav from "react-bootstrap/Nav"

function Sidebar() {
  //offcanvas states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Style variables
  const primaryButton = {
    backgroundColor: "#6eb0b2",
  };
  const background = {
    backgroundColor: "rgba(244,248,249,255)",
  };

  return (
    <>
      <Button
        variant="primary"
        className="text-black"
        onClick={handleShow}
        style={primaryButton}
      >
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={background}>
          <Offcanvas.Title>Magna</Offcanvas.Title>
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
  )
}

export default Sidebar 