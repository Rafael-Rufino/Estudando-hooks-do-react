import React, {useState, useMemo} from 'react';

export default function MemorizandoDados(){
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');

  const total = useMemo(() => {
    console.log('usememo rofou');

    return (counter * 1254 * 1025 * 20154);
  }, [counter]);

  function handlePlus(){
    setCounter((prevState) => prevState + 1 );
  }
  return(
    <div>
      <h3>useMemo</h3>
      <p>{counter}</p>
      <p>{total}</p>
      <button onClick={handlePlus}>Add+</button>

      <br />
      <span>{name}</span>
      <input onchange={e => setName(e.targe.value)}/>
      <br />
      <br />
    </div>
  )
}