import React from 'react';

import isDate from 'lodash.isdate';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'lodash.noop';

import { Button, FormGroup, Icon } from 'components';
import './controls.scss';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }

  formatDate(date) {
    if (!isDate(date)) return '';

    const day = `0${date.getDate()}`.substr(-2, 2);
    const month = `0${(date.getMonth() + 1)}`.substr(-2, 2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  onSubmitHandler(e) {
    const { onSave } = this.props;

    e.preventDefault();

    onSave();
  }

  onCancelHandler(e) {
    const { onCancel } = this.props;

    e.preventDefault();

    onCancel();
  }

  render() {
    const { className, date } = this.props;

    return (
      <div className={classNames('Controls', className)}>
        <fieldset>
          <FormGroup
            type="text"
            name="start_date"
            label="Start date:"
            addons={{
              right: <Icon>calendar</Icon>
            }}
            readOnly
            value={this.formatDate(date[0])}
          />

          <FormGroup
            type="text"
            name="end_date"
            label="End date:"
            addons={{
              right: <Icon>calendar</Icon>
            }}
            readOnly
            value={this.formatDate(date[1])}
          />
        </fieldset>

        <fieldset className="actions">
          <Button
            type="submit"
            primary
            fullWidth
            onClick={this.onSubmitHandler}
          >
            Submit
          </Button>

          <Button
            fullWidth
            onClick={this.onCancelHandler}
          >
            Cancel
          </Button>
        </fieldset>
      </div>
    );
  }
}

Controls.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date)]),
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
}

Controls.defaultProps = {
  onSave: noop,
  onCancel: noop,
}
