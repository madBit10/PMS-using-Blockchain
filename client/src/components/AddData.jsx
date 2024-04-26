import { useEffect, useState } from "react";
import Web3 from "web3";

import plantMonitor from "../contracts/PlantMonitor.json";

const AddData = ({ temp, humidity, moisture }) => {
  const [state, setState] = useState({ web3: null, contract: null });

  useEffect(() => {
    const provider = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );

    async function template() {
      const web3 = new Web3(provider);

      const netId = await web3.eth.net.getId();
      const deployedNet = plantMonitor.networks[netId];

      console.log(deployedNet);

      const contract = new web3.eth.Contract(
        plantMonitor.abi,
        deployedNet.address
      );

      setState({ web3, contract });
    }
    provider && template();
  }, []);

  // useEffect(() => {
  //   const { contract } = state;

  //   async function readData() {
  //     // const contract = new web3.eth.Contract(
  //     //   plantMonitor.abi,
  //     //   deployedNet.address
  //     // );

  //     const dataRead = await contract.methods.getDataPoint().call();

  //     // return data;
  //     setState(dataRead);
  //   }
  //   contract && readData();
  // }, [state]);

  async function writeData() {
    const { contract } = state;

    await contract.methods.addDataPoint(temp, humidity, moisture).send({
      from: "0x2880B16420178EC6b50EbC893E0C45198aD7C09a",
    });
    window.location.reload();
  }

  const handleAddData = () => {
    writeData();
    alert("Data Added Successfully");
  };

  return (
    <div className="addData">
      <button onClick={handleAddData} className="add-btn">
        Add Data
      </button>
    </div>
  );
};

export default AddData;
