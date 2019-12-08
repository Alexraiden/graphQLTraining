
import React from 'react';

const App = ({characters}) => {

    console.log('heeeeeerreerere == ', characters.name);
  
    if(!characters) return null
  
    const moreCharacters = ()=> console.log('more characters');
  
   const results = undefined
   // console.log('results = ', results);
    return (
      <div className="App">
        {results && 
          <div>
            {results.map((character, index)=>
            <p key={index}>{index +1} ) {character.name}</p>)
            }
            <button onClick={()=> moreCharacters()}></button>
          </div>
        }
      </div>
    );
  };

  export default App