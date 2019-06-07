import React, { Component } from 'react';

import classNames from 'classnames';

import './Dropdown.scss';

class Dropdown extends Component {
  state = { open: false, selected: this.props.title };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options !== this.props.options) {
      this.setState({ selected: this.props.title });
    }
  }

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
    this.props.onSelect(option);
  };

  renderOptions = () => {
    const { options } = this.props;
    return options.map(option => (
      <li key={option.code} onClick={() => this.selectOption(option)}>
        {option.emoji}
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
