// @flow
import React, { Component } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer, createFragmentContainer } from 'react-relay';

import { Environment } from './relay';
import type {App_propsApp} from './__generated__/App_propsApp.graphql';

type AppProps = {
  propsApp: App_propsApp,
}

const App = ({propsApp}: AppProps) => {

  console.log('propsApp == ', propsApp);

  if(!propsApp) return null

  const moreCharacters = ()=> console.log('more characters');

 const results = undefined
 console.log('results = ', results);
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

const AppFragmentContainer = createFragmentContainer(
  App, {
  propsApp: graphql`
    fragment App_propsApp on Character {
      name
      species
      gender
      type
    },
  `,
});

const AppQR = ({id, name}) => {
  return (
     <QueryRenderer
        environment={Environment}
        query={graphql`
        query AppQuery($id : ID!){
          character(id: $id) {
            ...App_propsApp
          }
        }
        `}
        variables={{id }}
        render={({ error, props }) => {
          console.log('qr: ', error, props);
            if (error) {
              return <span>{error.toString()}</span>;
            }

            if (props) {
              console.log('yes props');
              return <AppFragmentContainer propsApp={props} />;
            }

            return <span>loading</span>;
          }}
        />
  )
};

export default AppQR;


/*
, $filter: FilterCharacter

, filter:{name} 
  characters(page: 2, filter: $filter) {
            info {
              count
            }
            results {
              name
            }
          }
*/