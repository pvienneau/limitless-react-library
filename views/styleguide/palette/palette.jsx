import React from 'react';

import capitalize from 'lodash.capitalize';
import classNames from 'classnames';

import { Container, Card } from 'components';
import './palette.scss';

const PRIMARY_COLORS = ['primary', 'danger', 'warning', 'info', 'success'];
const SECONDARY_COLORS = ['pink', 'violet', 'purple', 'indigo', 'blue', 'teal', 'green', 'orange', 'brown', 'grey', 'slate'];
const GRADES = [800, 700, 600, 500, 400, 300];

export default () => (
  <Container className="Palette">
    {
      [
        {
          title: 'Primary colors',
          colors: PRIMARY_COLORS,
        },
        {
          title: 'Secondary colors',
          colors: SECONDARY_COLORS,
        },
      ].map(({ title, colors }) => (
        <section>
          <h6>{title}</h6>
          {
            colors.map(color => (
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
        </section>
      ))
    }
  </Container>
);
