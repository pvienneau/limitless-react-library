import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from 'components';
import './button.scss'

export default class Button extends React.Component {
    static propTypes = {
        icon: PropTypes.string,
        iconPosition: PropTypes.oneOf(['left', 'right']),
        onClick: PropTypes.func,
        fill: PropTypes.bool,
        primary: PropTypes.bool,
        warning: PropTypes.bool,
        info: PropTypes.bool,
        success: PropTypes.bool,
        danger: PropTypes.bool,
        rounded: PropTypes.bool,
        labeled: PropTypes.bool,
        flat: PropTypes.bool,
    };

    static defaultProps = {
      fill: true,
      iconPosition: 'left',
      primary: false,
      warning: false,
      info: false,
      success: false,
      danger: false,
      rounded: false,
      labeled: false,
      flat: false,
    };

    getElement() {
        const { to } = this.props;

        if (to) {
            return React.createElement('a', { to });
        }

        return React.createElement('button');
    }

    render() {
        const {
          children,
          icon,
          fill,
          className,
          iconPosition,
          primary,
          danger,
          warning,
          success,
          info,
          rounded,
          labeled,
          flat,
          ...props
        } = this.props

        const Element = !!props.to ? 'a' : 'button';

        return (
            <Element
              {...props}
              className={classNames('Button', className, {
                'no-fill': !fill,
                'has-children': !!children,
                'has-icon': !!icon,
                [`icon-position-${iconPosition}`]: !!iconPosition && !!icon,
                primary,
                danger,
                warning,
                info,
                success,
                rounded,
                labeled,
                flat,
              })}
            >
                <div className="inner">
                    {
                      !!icon && <Icon className="button-icon">{icon}</Icon>
                    }
                    <label className="label">{children}</label>
                </div>
            </Element>
        );
    }
}
