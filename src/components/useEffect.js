import React, { useState, useEffect } from "react";

export default function Lifecycle() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect rodou');
  },[])
  useEffect(() => {
    console.log('useEffect rodou', counter);
  },[counter])

  function handleAdd(){
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
     <h3>useEffect</h3>
     <p>{counter}</p>
     <button onClick={handleAdd}>Add +</button>
     <button onClick={handleMinus}>Sub -</button>
     </>

  );
}
