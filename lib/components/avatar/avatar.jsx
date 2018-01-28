import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './avatar.scss';

const Avatar = ({
  className,
  image,
  xlarge,
  large,
  small,
  mini,
}) => (
  <span
    className={classNames('Avatar', className, {
      xlarge,
      large,
      small,
      mini,
    })}
    style={{backgroundImage: `url(${image})`}}
  />
)

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  mini: PropTypes.bool,
}

Avatar.propTypes = {
  xlarge: false,
  large: false,
  small: false,
  mini: false,
}

export default Avatar;
