import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
 

  //Firebase data
  const [data, setData] = useState({});

  

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
    <>
     <Sidebar/> 
    </>
  );
}

export default App;
