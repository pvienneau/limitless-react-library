import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container, FormGroup } from 'components';
import './date-pickers.scss';

export default class DatePickers extends React.Component {
  render() {
    return (
      <Container className="DatePickers">
        <form>
          <fieldset>
            <legend>
              Basic
            </legend>
            <FormGroup
              type="date"
              label="Basic date range picker:"
              name="default_date"
            />
          </fieldset>
        </form>
      </Container>
    );
  }
}
