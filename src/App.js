import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData({
        Humidity: data.Humidity,
        Temperature : data.Temperature,
        Moisture: data.Moisture,
        Pump: data.Pump
      })
    });
  }, []);

  return (
    <>
      <h1>Humidity: {data.Humidity}</h1>
      <h1>Temperature: {data.Temperature}</h1>
      <h1>Moisture: {data.Moisture}</h1>
      <h1>Pump: {data.Pump}</h1>
    </>
  );
}
export default App;