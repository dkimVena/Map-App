import React from 'react';

import { Segment } from 'semantic-ui-react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Dropdown from './Dropdown';

import query from '../queries/fetchContinents';

class App extends React.Component {
  render() {
    const { loading, continents } = this.props.data;
    return loading ? (
      <div />
    ) : (
      <React.Fragment>
        <Dropdown
          title="test"
          options={[{ name: 'test', key: 1 }, { name: 'test2', key: 2 }]}
        />
        <Segment>{continents.map(item => item.name)}</Segment>
      </React.Fragment>
    );
  }
}

export default graphql(query)(App);
