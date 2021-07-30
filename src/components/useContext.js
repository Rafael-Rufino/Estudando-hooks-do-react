import React, {createContext, useContext} from 'react';

const ThemeContext = createContext();

function Context(){
    return(
      <>
        <h3>useContext</h3>
        <ThemeContext.Provider value = {{ mode: 'Dark'}}>
          <Button />
        </ThemeContext.Provider>
      </>
    );

}

function Button(){
  const theme = useContext(ThemeContext);
  return(
    <button>{theme.mode}</button>
  );
}

export default Context;