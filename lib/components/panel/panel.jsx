import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash.isempty';

import { Button, Paper } from 'components';
import './panel.scss';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.generateActionButtons = this.generateActionButtons.bind(this);
    this.onCollapseButtonClick = this.onCollapseButtonClick.bind(this);
  }

  onCollapseButtonClick() {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  }

  generateActionButtons() {
    const { canCollapse, canRefresh, canDelete } = this.props;

    const buttons = [];

    if (canCollapse) buttons.push(
      <Button
        key="btn-collapse"
        icon="ctrl"
        fill={false}
        onClick={this.onCollapseButtonClick}
      />
    )

    if (canRefresh) buttons.push(
      <Button
        key="btn-refresh"
        icon="spinner11"
        fill={false}
      />
    )

    if (canDelete) buttons.push(
      <Button
        key="btn-delete"
        icon="cross"
        fill={false}
      />
    )

    return buttons;
  }

  render () {
    const {
      className,
      children,
      primary,
      danger,
      success,
      info,
      warning,
      title,
      subtitle,
      canCollapse,
      canRefresh,
      canDelete,
      fill,
      flat,
      ...props,
    } = this.props;
    const { isOpen } = this.state;

    const actionButtons = this.generateActionButtons();

    return (
      <Paper
        {...props}
        className={classNames(
          'Panel',
          className,
          {
            primary,
            warning,
            danger,
            info,
            success,
            flat,
            'no-fill': !fill,
          }
        )}
      >
        {
          (title || !isEmpty(actionButtons)) && (
            <div className="panel-header">
              <h4 className="panel-title">
                {title}
                {
                  subtitle && <small>{subtitle}</small>
                }
              </h4>
              {
                actionButtons && (
                  <div className="panel-actions">
                    {
                      actionButtons
                    }
                  </div>
                )
              }
            </div>
          )
        }
        {
          isOpen && (
            <div className="panel-body">
              {children}
            </div>
          )
        }
      </Paper>
    );
  }
}

Panel.propTypes = {
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fill: PropTypes.bool,
  flat: PropTypes.bool,
  canCollapse: PropTypes.bool,
  canRefresh: PropTypes.bool,
  canDelete: PropTypes.bool,
}

Panel.defaultProps = {
  primary: false,
  warning: false,
  danger: false,
  info: false,
  success: false,
  title: '',
  subtitle: '',
  fill: true,
  flat: false,
  canCollapse: false,
  canRefresh: false,
  canDelete: false,
}
