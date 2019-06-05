import React, { Component } from 'react';

import classNames from 'classnames';

import './Dropdown.scss';

class Dropdown extends Component {
  state = { open: false, selected: this.props.title };

  openDropdownMenu = event => {
    event.preventDefault();

    this.setState({ open: true }, () => {
      document.addEventListener('click', this.closeDropdownMenu);
    });
  };

  closeDropdownMenu = () => {
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeDropdownMenu);
    });
  };

  selectOption = option => {
    this.setState({ selected: option.name });
  };

  renderOptions = () => {
    const { options } = this.props;

    return options.map(option => (
      <li key={option.key} onClick={() => this.selectOption(option)}>
        {option.name}
      </li>
    ));
  };

  render() {
    const { className } = this.props;
    const { selected } = this.state;

    return (
      <div className={classNames('dropdown', className)}>
        <div className="dropdown--button" onClick={this.openDropdownMenu}>
          {selected}
        </div>

        {this.state.open ? <ul>{this.renderOptions()}</ul> : null}
      </div>
    );
  }
}

export default Dropdown;
