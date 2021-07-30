
import React, {useState,useCallback} from 'react';

const fnCounter = new Set();

 function Memorizando(){
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);


  return(
    <div>
      <h3>useCallback</h3>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props){
  return(
    <button onClick={props.onClick}> Add+ </button>
  );
}

export default Memorizando;