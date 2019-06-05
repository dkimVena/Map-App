import React from 'react';

import { Segment } from 'semantic-ui-react';
import classNames from 'classnames';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Dropdown from './Dropdown';
import InfoCard from './InfoCard';

import query from '../queries/fetchContinents';

import './App.scss';

class App extends React.Component {
  state = {
    selectedCountries: [],
    selectedCountry: {
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
    }
  };

  selectContinent = continent => {
    this.setState({ selectedCountries: continent.countries });
  };

  selectedCountry = country => {
    this.setState({ selectedCountry: country });
  };
  render() {
    const { loading, continents } = this.props.data;
    const { selectedCountries, selectedCountry } = this.state;
    const {
      code,
      name,
      native,
      phone,
      currency,
      languages,
      emoji
    } = selectedCountry;

    return loading ? (
      <div />
    ) : (
      <div className={classNames('container')}>
        <div className={classNames('sidePanel')}>
          <div className={classNames('sidePanel__option')}>
            <Dropdown
              className={classNames('sidePanel__dropdown')}
              title="Continent"
              options={continents}
              onSelect={this.selectContinent}
            />
            <Dropdown
              className={classNames('sidePanel__dropdown')}
              title="Country"
              options={selectedCountries}
              onSelect={this.selectedCountry}
            />
          </div>
          <div className={classNames('sidePanel__info')}>
            {selectedCountry && (
              <InfoCard
                country={{
                  code,
                  name,
                  native,
                  phone,
                  currency,
                  languages,
                  emoji
                }}
              />
            )}
          </div>
        </div>
        <div className={classNames('mainPanel')}>
          <Segment>{continents.map(item => item.name)}</Segment>
        </div>
      </div>
    );
  }
}

export default graphql(query)(App);
