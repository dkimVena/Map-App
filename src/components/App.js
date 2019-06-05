import React from 'react';

import { Segment } from 'semantic-ui-react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Dropdown from './Dropdown';
import InfoCard from './InfoCard';

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
        <InfoCard
          country={{
            code: 'KR',
            name: 'South Korea',
            native: '대한민국',
            phone: '82',
            continent: {
              name: 'Asia'
            },
            currency: 'KRW',
            languages: [
              {
                name: 'Korean'
              }
            ],
            emoji: '🇰🇷',
            emojiU: 'U+1F1F0 U+1F1F7'
          }}
        />
        <Segment>{continents.map(item => item.name)}</Segment>
      </React.Fragment>
    );
  }
}

export default graphql(query)(App);
