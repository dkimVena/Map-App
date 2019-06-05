import { gql } from 'apollo-boost';

export default gql`
  {
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        currency
        languages {
          name
        }
        emoji
      }
    }
  }
`;
