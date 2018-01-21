import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Panel } from 'components';
import './card.scss';

const Card = ({
  title,
  description,
  hintText,
  children,
  className,
  ...props
}) => (
  <Panel
    {...props}
    className={classNames('Card', className)}
  >
    <div className="card-header">
      <h3 className="card-title">
        {title}
      </h3>
      <p className="card-description">
        {description}
      </p>
    </div>
    <div className="card-body">
      <div className="card-inner">
        {children}
      </div>
      <div className="card-hint-text">
        {hintText}
      </div>
    </div>
  </Panel>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hintText: PropTypes.string,
}

export default Card;
