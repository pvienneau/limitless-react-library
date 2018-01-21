import React from 'react';

import capitalize from 'lodash.capitalize';
import classNames from 'classnames';

import { Container, Card } from 'components';
import './palette.scss';

const COLORS = ['primary', 'danger', 'warning', 'info', 'success'];
const GRADES = [800, 700, 600, 500, 400, 300];

export default () => (
  <Container className="Palette">
    {
      COLORS.map(color => (
        <div
          key={color}
          className={classNames('color-spectrum', `color-spectrum-${color}`)}
        >
          {
            GRADES.map(grade => (
              <div
                key={grade}
                className={classNames('color-grade', `color-${color}-${grade}`)}
              >
                <Card
                  title={`${capitalize(color)} ${grade}`}
                  description={'lorem ipsum.'}
                  hintText={`${color}-${grade}`}
                />
              </div>
            ))
          }
        </div>
      ))
    }
  </Container>
);
