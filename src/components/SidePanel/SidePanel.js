import React, { Component } from 'react';

import classNames from 'classnames';
import Dropdown from '../Dropdown';
import InfoCard from '../InfoCard';

import './SidePanel.scss';

class SidePanel extends Component {
  state = {
    selectedCountries: [],
    selectedCountry: {}
  };
  selectContinent = continent => {
    this.setState({ selectedCountries: continent.countries });
  };

  selectedCountry = country => {
    this.setState({ selectedCountry: country });
    this.props.onSelect(country);
  };
  render() {
    const { continents } = this.props;
    const { selectedCountries, selectedCountry } = this.state;

    return (
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
          {Object.keys(selectedCountry).length !== 0 && (
            <InfoCard
              country={{
                code: selectedCountry.code,
                name: selectedCountry.name,
                native: selectedCountry.native,
                phone: selectedCountry.phone,
                currency: selectedCountry.currency,
                languages: selectedCountry.languages,
                emoji: selectedCountry.emoji
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SidePanel;
