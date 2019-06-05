import { gql } from 'apollo-boost';

export default gql`
  {
    continents {
      name
      countries {
        code
        name
      }
    }
  }
`;
