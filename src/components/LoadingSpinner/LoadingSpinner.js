import React from 'react';

import classNames from 'classnames';

import './LoadingSpinner.scss';

const LoadingSpinner = () => (
  <div className={classNames('background')}>
    <div className={classNames('lds-ring')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default LoadingSpinner;
