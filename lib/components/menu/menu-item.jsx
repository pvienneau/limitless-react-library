import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from 'components';
import './menu-item.scss';

export default class MenuItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
  };

  render() {
    const { label, className, ...props } = this.props;

    return (
      <Button
        {...props}
        className={classNames('MenuItem', className)}
        fill={false}
      >
        {label}
      </Button>
    );
  }
}
