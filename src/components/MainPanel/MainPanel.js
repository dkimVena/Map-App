import React from 'react';

import classNames from 'classnames';
import Map from '../Map';
import locationData from '../../static/location.json';

import './MainPanel.scss';

const getCountryLocation = country => {
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
const MainPanel = ({ onSelectCountry, selectedCountry, className }) => (
  <div className={classNames('mainPanel', className)}>
    <Map
      country={getCountryLocation(selectedCountry)}
      onSelectCountry={onSelectCountry}
    />
  </div>
);

export default MainPanel;
