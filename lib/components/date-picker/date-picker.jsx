import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import clickOutside from 'react-click-outside';

import { InputGroup, Icon, Dropdown, Paper } from 'components';
import now from 'lodash/now';
import { Calendar } from './calendar';
import { Controls } from './controls';
import { initializeDateState } from './utils';
import { previousMonth, nextMonth } from 'utils/js/date';
import './date-picker.scss';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      ...initializeDateState(props),
    }

    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.generateCalendar = this.generateCalendar.bind(this);
    this.onCurrentDateChange = this.onCurrentDateChange.bind(this);
    this.onSelectedDateChange = this.onSelectedDateChange.bind(this);
  }

  onCurrentDateChange(currentDate) {
    this.setState({ currentDate })
  }

  onSelectedDateChange(selectedDates) {
    this.setState({ selectedDates })
  }

  generateCalendar() {
    const { range } = this.props;
    const { currentDate, selectedDates } = this.state;

    return (
      <div className="datepicker-container">
        <Paper className="datepicker-box datepicker-box-controls">
          <Controls date={selectedDates} />
        </Paper>

        <Paper className="datepicker-box datepicker-box-calendar">
          <Calendar
            className="calendar-prev-month"
            currentDate={currentDate}
            date={selectedDates}
            range={range}
            onCurrentDateChange={this.onCurrentDateChange}
            onChange={this.onSelectedDateChange}
          />
        </Paper>

        <Paper className="datepicker-box datepicker-box-calendar">
          <Calendar
            className="calendar-next-month"
            currentDate={nextMonth(currentDate)}
            date={selectedDates}
            range={range}
            onCurrentDateChange={currentDate => this.onCurrentDateChange(previousMonth(currentDate))}
            onChange={this.onSelectedDateChange}
          />
        </Paper>
      </div>
    );
  }

  handleClickOutside() {
    this.setState({
      isOpen: false,
    });
  }

  onFocusHandler() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { className, range, ...props } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames('DatePicker', className)}>
          <Dropdown
            body={this.generateCalendar()}
            open={isOpen}
            position="bottom"
          >
            <InputGroup
              addons={{left: <Icon>calendar22</Icon>}}
              onFocus={this.onFocusHandler}
            />
          </Dropdown>
      </div>
    );
  }
}

DatePicker.propTypes = {
  range: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    PropTypes.instanceOf(Date),
  ]),
  currentDate: PropTypes.instanceOf(Date),
}

DatePicker.defaultProps = {
  range: false,
  currentDate: now(),
}

export default clickOutside(DatePicker);
