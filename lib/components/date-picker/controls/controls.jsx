import React from 'react';

import isDate from 'lodash.isdate';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button, FormGroup, Icon } from 'components';
import './controls.scss';

export default class Controls extends React.Component {
  formatDate(date) {
    if (!isDate(date)) return '';

    const day = `0${date.getDate()}`.substr(-2, 2);
    const month = `0${(date.getMonth() + 1)}`.substr(-2, 2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
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
          >
            Submit
          </Button>

          <Button fullWidth>
            Cancel
          </Button>
        </fieldset>
      </div>
    );
  }
}

Controls.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date)]),
}
