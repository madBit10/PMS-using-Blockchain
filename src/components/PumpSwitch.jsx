import {React,useState} from 'react'
import { Form,FormCheck} from "react-bootstrap";

export default function PumpSwitch() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

const onSwitchAction = () => {
  setIsSwitchOn(!isSwitchOn);
};
  return (
<>
<Form>

<Form.Switch
    onChange={onSwitchAction}
    id="custom-switch"
    label="anything you want to put here"
    checked={isSwitchOn}
    // disabled // apply if you want the switch disabled
  /> </Form>

</>  )
}
