import React from "react";

function MoreButton({setSlice, slice}) {

  function showMore(){
    setSlice({
      start: slice.start + 4,
      end: slice.end + 4
    });
  }

  return <button onClick={showMore}>More sushi!</button>;
}

export default MoreButton;
