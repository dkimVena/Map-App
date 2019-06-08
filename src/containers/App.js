import React from 'react';

import classNames from 'classnames';
import { graphql } from 'react-apollo';
import SidePanel from '../components/SidePanel';
import MainPanel from '../components/MainPanel';
import LoadingSpinner from '../components/LoadingSpinner';

import query from '../queries/fetchContinents';

import './App.scss';

class App extends React.Component {
  state = {
    selectedCountry: {},
    selectedCountries: []
  };

  handleSelectCountry = country => {
    this.setState({ selectedCountry: country });
  };

  handleSelectContinent = continent => {
    this.setState({ selectedCountries: continent.countries });
  };

  handleManualSelectCountry = country => {
    let continent = this.props.data.continents.find(
      continent => continent.name === country.continent
    );
    let selectedData = continent.countries.find(
      data => data.code === country.code
    );
    this.setState({ selectedCountry: selectedData });
  };

  render() {
    const { loading, continents } = this.props.data;
    const { selectedCountry } = this.state;

    return loading ? (
      <LoadingSpinner />
    ) : (
      <div className={classNames('container')}>
        <SidePanel
          onSelectCountry={this.handleSelectCountry}
          onSelectContinent={this.handleSelectContinent}
          continents={continents}
          selectedCountry={this.state.selectedCountry}
          selectedCountries={this.state.selectedCountries}
        />
        <MainPanel
          selectedCountry={selectedCountry}
          onSelectCountry={this.handleManualSelectCountry}
        />
      </div>
    );
  }
}

export default graphql(query)(App);
