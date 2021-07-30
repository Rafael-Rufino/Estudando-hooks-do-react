import React, {useReducer} from 'react';

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'plus':
      return{
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    
    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };
      default:
        return state;
      
  }
  

  
}

const initialValue =  {
  counter: 0,
  clicks: 0,
};

export default function ManipulandoStates(){
  const [state, dispatch] = useReducer(reducer, initialValue);
  
  function handleAdd(){
    dispatch({type: 'plus'});

  }
  function handleMinus(){
    dispatch({type: 'minus'});

  }
  return(
    <div>
      <h3>useReducer</h3>
      <p>{state.counter}</p>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handleAdd}> ADD+ </button>
      <button onClick={handleMinus}>Sub-</button>
    
    </div>
  )
}