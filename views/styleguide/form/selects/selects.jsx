import React from 'react'

import map from 'lodash.map'

import { Container, FormGroup } from 'components'
import { US_STATES } from 'utils/spec/fixtures'
import './selects.scss'

const US_STATES_OPTIONS = map(US_STATES, ({ name, abbreviation }) => ({
  name,
  value: abbreviation,
}))

export default class Selects extends React.Component {
  render () {
    return (
      <Container className="Selects">
        <form>
          <fieldset>
            <legend>
              Single Select
            </legend>
            <FormGroup
              type="select"
              label="Basic select"
              name="basic_select"
              options={US_STATES_OPTIONS}
            />
            <FormGroup
              type="select"
              label="Grouped select"
              name="grouped_select"
              options={US_STATES_OPTIONS}
              groupBy="timezones"
            />
          </fieldset>
        </form>
      </Container>
    )
  }
}
