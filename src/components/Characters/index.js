import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import Display from './Display'


const AppFragmentContainer = createFragmentContainer(
    Display, {
    propsApp: graphql`
      fragment Characters_propsApp on Character {
        name
        species
        gender
        type
      },
    `,
  });

  export default AppFragmentContainer