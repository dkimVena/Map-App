import React, { Component } from 'react';

import classNames from 'classnames';
import Map from '../Map';
import locationData from '../../static/location.json';

import './MainPanel.scss';

class MainPanel extends Component {
  getCountryLocation = country => {
    let result = {};
    if (Object.keys(country).length !== 0) {
      let selectedCountry = locationData.ref_country_codes.find(
        data => data.alpha2 === country.code
      );
      result = {
        code: country.code,
        name: country.name,
        coordinates: [selectedCountry.longitude, selectedCountry.latitude]
      };
    }
    return result;
  };

  render() {
    return (
      <div className={classNames('mainPanel')}>
        <Map country={this.getCountryLocation(this.props.selectedCountry)} />
      </div>
    );
  }
}

export default MainPanel;
