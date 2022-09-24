import Card from "react-bootstrap/Card";
import DataIcons from "./icons/DataIcons";

const DataCards = ({ type , data }) => {
  let parameters;
  let color;
  let units;
  
  if (type=="water" ){
    parameters="Moisture";
    color="#cbd7ff";
    units="_"
    if(data==1){
      data="Present"
    }else if(data == 0){
      data="None"
    }

  }
  else if (type=="pump"){
    parameters="pump";
    color="#F5AA07";
    units="_"
    if(data==1){
      data="On"
    }else if(data == 0){
      data="Off"
    }
  }
  else if (type=="temp"){
    parameters="temperature";
    color="#b77f53";
    units="ºC"
  }
  else if (type=="humid"){
    parameters="Humidity";
    color="#58896b";
    units="%"
  }
  return (
   
    <>
      <Card className="mt-3">
        <div className="p-3">
          <DataIcons type={`${type}`} />
          <br/>
          <h5 style={{ color: `${color}` }}>{parameters}</h5>

          <br/>
          <h1 >{data}</h1>

          <div id="units"  style={{ color: `${color}` }}>{units}</div>
        </div>


      </Card>
    </>
  );
};

export default DataCards;
