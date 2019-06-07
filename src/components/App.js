import React from 'react';

import classNames from 'classnames';
import { graphql } from 'react-apollo';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

import query from '../queries/fetchContinents';

import './App.scss';

class App extends React.Component {
  state = {
    selectedCountry: {}
  };

  handleSelectCountry = country => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const { loading, continents } = this.props.data;
    const { selectedCountry } = this.state;

    return loading ? (
      <div />
    ) : (
      <div className={classNames('container')}>
        <SidePanel
          onSelect={this.handleSelectCountry}
          continents={continents}
        />
        <MainPanel selectedCountry={selectedCountry} />
      </div>
    );
  }
}

export default graphql(query)(App);
