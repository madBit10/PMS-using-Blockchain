import React from 'react'
import { Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


export const PlantIdCard = (props) => {
  // const [isPlant,setisPlant]=useState("Loading")

  // useEffect(()=>{
  //   if(props.data.is_plant){
  //     setisPlant(props)
  //   }
  // },[props.data])

  return (
    <Modal
    show={props.show} 
    onHide={props.onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      {(props.data.is_plant)?"It is plant!  with accuracy "+props.data.is_plant_probability.toString().slice(2,4)+"%":"It isn't a plant!"}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{(props.data.is_plant)?
      (<><Row>{"We have 3 suggestions for the following image (ordered in terms of probability)."}</Row>
      <Row>{"1)"+props.data.suggestions[0].plant_name+"(Also commonly known as "+props.data.suggestions[0].plant_details.common_names[0]+")"}</Row>
      <Row>{"2)"+props.data.suggestions[1].plant_name+"(Also commonly known as "+props.data.suggestions[1].plant_details.common_names[0]+")"}</Row>
      <Row>{"3)"+props.data.suggestions[2].plant_name+"(Also commonly known as "+props.data.suggestions[2].plant_details.common_names[0]+")"}</Row></>)
      :(<></>)}
    </Modal.Body>
    {/* <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
  </Modal>  )
}
