import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contador from './components/useState'
import Lifecycle from './components/useEffect'
import Context from './components/useContext'
import ManipulandoStates from './components/useReducer'
import Memorizando from './components/useCallback'
import MemorizandoDados from './components/useMemo'
ReactDOM.render(
  <React.StrictMode>
    <App />

    <Contador/>
    <Lifecycle/>
    <Context/>
    <ManipulandoStates/>
    <Memorizando/>
    <MemorizandoDados />
  </React.StrictMode>,
  document.getElementById('root')
);
