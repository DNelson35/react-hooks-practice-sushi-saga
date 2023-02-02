import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([]);

  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then(res => setSushis(res))
  }, [])

  return (
    <div className="app">
      <SushiContainer 
      sushis ={sushis} 
      setMoney={setMoney} 
      money={money}
      setPlates={setPlates}
      />

      <Table 
      money={money}
      plates={plates} />
    </div>
  );
}

export default App;
