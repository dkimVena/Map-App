import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}

export default Layout;
