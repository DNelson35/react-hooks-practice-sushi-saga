import React, { useState } from "react";

function Sushi({sushi, money, setMoney, setPlates}) {
  const {name, img_url, price} = sushi;

  const [isEaten , setIsEaten] = useState(false)


  function onEaten(){
    if(money > price){
      setIsEaten(isEaten => !isEaten)
      setMoney(money - price)
      setPlates(plates => [...plates, []])
    }
    return null
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onEaten}>
        {isEaten ? "Eaten" : null}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
