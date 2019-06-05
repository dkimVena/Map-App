import React, { Component } from 'react';

import classNames from 'classnames';

import './InfoCard.scss';

class InfoCard extends Component {
  getCountryLanguages = countries => countries.map(country => country.name);

  render() {
    const { className, country } = this.props;
    console.log(country);

    return (
      <figure className={classNames('InfoCard', className)}>
        <div className="flag-image">
          <span>{country.emoji}</span>
        </div>
        <figcaption>
          <h3>{country.name}</h3>
          <h4>{country.native}</h4>
          <p>{country.code}</p>
          <p>
            <i className="icon ion-ios-telephone" />: +{country.phone}
          </p>
          <p>
            <i className="icon ion-social-usd" />: {country.currency}
          </p>
          <p>
            <i className="icon ion-chatbox-working" />:{' '}
            {this.getCountryLanguages(country.languages).join(', ')}
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default InfoCard;
