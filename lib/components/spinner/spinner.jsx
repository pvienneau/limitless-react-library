import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from 'components';
import './spinner.scss';

export default class Spinner extends React.Component {
  render() {
    const { className, icon } = this.props;

    return (
      <div className={classNames('Spinner', className)}>
        <Icon className="spinner-icon">
          {icon}
        </Icon>
      </div>
    );
  }
}

Spinner.propTypes = {
  icon: PropTypes.string,
};

Spinner.defaultProps = {
  icon: 'spinner2',
};
