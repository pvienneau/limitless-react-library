import React from 'react';

import PropTypes from 'prop-types';
import map from 'lodash.map';
import fill from 'lodash.fill';
import chunk from 'lodash.chunk';
import slice from 'lodash.slice';
import now from 'lodash.now';
import classNames from 'classnames';

import { Button } from 'components';
import './calendar.scss';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurdsay', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const selectedDates = [];

    if (Array.isArray(props.date)) {
      selectedDates[0] = new Date(props.date.getTime())
    } else if(props.date instanceof Date) {
      selectedDates[0] = new Date(props.date[0].getTime());
      selectedDates[1] = new Date(props.date[1].getTime());
    }

    const currentDate = new Date(selectedDates[0] ? selectedDates[0].getTime() : now());

    currentDate.setDate(1);

    this.state = {
      currentDate,
      selectedDates,
      isRange: Array.isArray(props.date),
      nextDateChangeIndex: selectedDates.length%2,
    };

    this.buildWeeks = this.buildWeeks.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.onNextMonthClickHandler = this.onNextMonthClickHandler.bind(this);
    this.onPreviousMonthClickHandler = this.onPreviousMonthClickHandler.bind(this);
    this.updateMonth = this.updateMonth.bind(this);
    this.isSelectedStartDate = this.isSelectedStartDate.bind(this);
    this.isSelectedEndDate = this.isSelectedEndDate.bind(this);
    this.isInSelectedDatesRange = this.isInSelectedDatesRange.bind(this);
    this.setState = this.setState.bind(this);
  }

  setState(nextStateFn) {
    let nextState = nextStateFn;

    if (typeof nextStateFn === 'function') {
      nextState = nextStateFn(this.state);
    }

    if (
      nextState.selectedDates &&
      nextState.selectedDates.length === 2 &&
      this.isGreaterThan(...nextState.selectedDates)
    ) {
      nextState.selectedDates.reverse();
    }


    return super.setState(nextState);
  }

  onNextMonthClickHandler() {
    this.updateMonth(1);
  }

  onPreviousMonthClickHandler () {
    this.updateMonth(-1);
  }

  onDateClick (selectedDate) {
    return () => {
      this.setState(({ selectedDates, nextDateChangeIndex }) => {
        const nextSelectedDates = Object.assign([], selectedDates);

        if (nextSelectedDates.length === 2) {
          if (this.isLessThan(selectedDate, nextSelectedDates[0])) {
            nextDateChangeIndex = 0;
          } else if (this.isGreaterThan(selectedDate, nextSelectedDates[1])) {
            nextDateChangeIndex = 1;
          }
        }

        nextSelectedDates[nextDateChangeIndex] = selectedDate

        return {
          selectedDates: nextSelectedDates,
          nextDateChangeIndex: (nextDateChangeIndex+1)%2,
        }
      })
    }
  }

  updateMonth(changeValue) {
    this.setState(({ currentDate }) => {
      currentDate.setMonth(currentDate.getMonth() + changeValue);

      return { currentDate };
    })
  }

  buildWeeks() {
    const { date } = this.props;
    const { currentDate } = this.state;

    const firstDayOfMonth = new Date(currentDate.getTime());
    const lastDayOfMonth = new Date(currentDate.getTime());
    const firstDayOfCalendar = new Date(currentDate.getTime());

    firstDayOfMonth.setDate(1);
    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 0);
    firstDayOfCalendar.setDate(1 - firstDayOfMonth.getDay());

    const days = [];

    for (let ii = 0; ii < 6*7; ii ++) {
      const day = new Date(firstDayOfCalendar.getTime());
      day.setDate(firstDayOfCalendar.getDate() + ii);

      days.push(day);
    }

    return chunk(days, 7);
  }

  isSelectedStartDate(date) {
    const { selectedDates } = this.state;
    const selectedStartDate = selectedDates[0];

    return selectedStartDate && selectedStartDate.getMonth() === date.getMonth() && selectedStartDate.getDate() === date.getDate()
  }

  isSelectedEndDate(date) {
    const { selectedDates } = this.state;
    const selectedEndDate = selectedDates[1];

    return selectedEndDate && selectedEndDate.getMonth() === date.getMonth() && selectedEndDate.getDate() === date.getDate()
  }

  isInSelectedDatesRange(date) {
    const { selectedDates } = this.state;
    const [ selectedStartDate, selectedEndDate ] = selectedDates;

    if ( !(selectedStartDate instanceof Date && selectedEndDate instanceof Date) ) return false;

    return this.isLessThan(selectedStartDate, date) && this.isLessThan(date, selectedEndDate);
  }

  isLessThan(date1, date2) {
    return date1.getTime() < date2.getTime();
  }

  isLessThanOrEqualThan(...args) {
    return this.isLessThan(...args) || this.isEqualTo(...args);
  }

  isGreaterThan(date1, date2) {
    return date1.getTime() > date2.getTime();
  }

  isGreaterThanOrEqualThan(...args) {
    return this.isGreaterThan(...args) || this.isEqualTo(...args);
  }

  render() {
    const { currentDate, selectedDate } = this.state;
    const weeks = this.buildWeeks();

    return (
      <div className="Calendar">
        <div className="calendar-header">
          <Button
            fill={false}
            icon="caret-left-32"
            onClick={this.onPreviousMonthClickHandler}
          />
          <div className="calendar-header-title">
            {slice(MONTHS[currentDate.getMonth()], 0, 3)} {currentDate.getFullYear()}
          </div>
          <Button
            fill={false}
            icon="caret-right-32"
            onClick={this.onNextMonthClickHandler}
          />
        </div>
        <div className="calendar-body">
          {
            map(weeks, (week, k) => (
              <div
                key={`${currentDate.getMonth()}${k}`}
                className="calendar-week"
              >
                {
                  map(week, (day, kk) => (
                    <div
                      key={`${currentDate.getMonth()}${k}${kk}`}
                      className={classNames('calendar-day', {
                        'out-of-month': currentDate.getMonth() !== day.getMonth(),
                        'start-date': this.isSelectedStartDate(day),
                        'end-date': this.isSelectedEndDate(day),
                        'in-range': this.isInSelectedDatesRange(day),
                      })}
                    >
                      <div className="calendar-day-inner">
                        <Button
                          onClick={this.onDateClick(day)}
                        >
                          {day.getDate()}
                        </Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.oneOf([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
}
