import React, { Component } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import { Environment } from './relay';

const App = ({ query }) => {

 const {name, species, gender} = query.character
  return (
    <div className="App">
        <p>
          `Character name is {name}`
        </p>
    </div>
  );
};

const AppQR = ({id, name}) => {
  console.log('id', id);
  console.log('name', name);
  return (
     <QueryRenderer
        environment={Environment}
        query={graphql`
        query AppQuery($id : ID, $name : String){
          characters(page: 2, filter: { name: $name }) {
            info {
              count
            }
            results {
              name
            }
          }
          character(id: $id) {
            id,
            name,
            species,
            gender,
            type
          }
        }
        `}
        variables={{id , name }}
        render={({ error, props }) => {
          console.log('qr: ', error, props);
            if (error) {
              return <span>{error.toString()}</span>;
            }

            if (props) {
              return <App query={props} />;
            }

            return <span>loading</span>;
          }}
        />
  )
};

export default AppQR;
