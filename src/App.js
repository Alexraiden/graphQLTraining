// @flow
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer} from 'react-relay';
import { Environment } from './relay';
import AppFragmentContainer from './components/Characters'


const AppQR = ({id, name}) => {
  return (
     <QueryRenderer
        environment={Environment}
        query={graphql`
        query AppQuery($name: String){
          characters(page: 1, filter:{name:$name}) {
            ...Characters_characters
          }
        }
        `}
        variables={{name : name }}
        render={({ error, props }) => {
            if (error) {
              return <span>{'oups didnt work'}</span>;
            }

            if (props) {
              console.log('yes props');
              console.log('props === ', props)
              console.log('props.propsApp === ', props.propsApp)
              return <AppFragmentContainer characters={props.characters} />;
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