import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import Display from './Display'


const CharactersFragmentContainer = createFragmentContainer(
    Display, {
    characters: graphql`
      fragment Characters_characters on Characters @relay(plural: true) {
          results{
            name
            species
            gender
            type
          }
        
      },
    `,
  });

  export default CharactersFragmentContainer