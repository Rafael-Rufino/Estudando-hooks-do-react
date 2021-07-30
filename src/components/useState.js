import React, { useState } from "react";

export default function Contador() {
  const [counter, setCounter] = useState(0);

  function handlePlus(){
    setTimeout(() => {
       setCounter((prevState)=> prevState + 1)
    }, 2000)
  }

  function handleMinus(){
    setTimeout(() => {
      setCounter((prevState)=> prevState - 1);
    }, 2000)
  }
 
  return (
    <>
     <h3>useSate</h3>
     <p>{counter}</p>
     <button onClick={handlePlus}>Add +</button>
     <button onClick={handleMinus}>Sub -</button>
     </>

  );
}
