import Card from "react-bootstrap/Card";
import DataIcons from "./icons/DataIcons";
const DataCards = ({ type , data }) => {
  return (
    <>
      <Card className="mt-3">
        <div className="p-3">
          <DataIcons type={`${type}`} />
          <h1>{data}</h1>
        </div>
      </Card>
    </>
  );
};

export default DataCards;
