import Card from "react-bootstrap/Card";
import DataIcons from "./icons/DataIcons";
const DataCards = ({ type }) => {
  return (
    <>
      <Card className="mt-3">
        <div className="p-3">
          <DataIcons type={`${type}`} />
        </div>
      </Card>
    </>
  );
};

export default DataCards;
