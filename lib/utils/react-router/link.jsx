import React from 'react';

import trimStart from 'lodash.trimstart';

import { Link as ReactRouterLink, withRouter } from 'react-router-dom';

class Link extends React.Component {
  render() {
    const { to, ...props } = this.props;

    const computedTo = `/${trimStart(to, '/')}`;

    return (
      <ReactRouterLink
        to={computedTo}
        {...props}
      />
    );
  }
}

export default Link;
