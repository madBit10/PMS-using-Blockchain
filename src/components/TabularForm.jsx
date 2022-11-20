import React from "react";
import Table from "react-bootstrap/Table";
function TabularForm({ data }) {
  if (data === undefined) {
    data = [];
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Humidity</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {data != undefined ? (
            data.map((data, index) => (
              <tr data-index={index}>
                <td>{index + 1}</td>
                <td>{data.timeofdata.substr(11, 5)}</td>
                <td>{data.humidity}</td>
                <td>{data.temperature}</td>
              </tr>
            ))
          ) : (
            <h5>Loading</h5>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default TabularForm;
