import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, money, setMoney, setPlates}) {
  const [slice, setSlice] = useState({
    start: 0,
    end: 4
  })

  const sushiList = sushis.slice(slice.start, slice.end).map(sushi => <Sushi key={sushi.id} sushi = {sushi} setMoney={setMoney} money={money} setPlates={setPlates} />);

  return (
    <div className="belt">
      {sushiList}
      <MoreButton setSlice={setSlice} slice={slice}/>
    </div>
  );
}

export default SushiContainer;
