import React from 'react'

import { Container, FormGroup } from 'components'
import './date-pickers.scss'

export default class DatePickers extends React.Component {
  render () {
    return (
      <Container className="DatePickers">
        <form>
          <fieldset>
            <div className="flex">
              <FormGroup
                type="date"
                label="Basic date range picker:"
                name="default_date"
                className="flex-grow"
                range
              />

              <FormGroup
                type="date"
                label="Show calendars on left:"
                name="default_date"
                className="flex-grow"
                range
                position="right"
              />
            </div>

            <div className="flex">
              <FormGroup
                type="date"
                label="Display week numbers:"
                name="default_date"
                className="flex-grow"
                range
              />

              <FormGroup
                type="date"
                label="Display date dropdowns:"
                name="default_date"
                className="flex-grow"
                range
                position="right"
              />
            </div>

            <div className="flex">
              <FormGroup
                type="date"
                label="Display time picker:"
                name="default_date"
                className="flex-grow"
                range
              />

              <FormGroup
                type="date"
                label="Time minute increments:"
                name="default_date"
                className="flex-grow"
                range
                position="right"
              />
            </div>

            <div className="flex">
              <FormGroup
                type="date"
                label="Basic single date picker:"
                name="default_date"
                className="flex-grow"
              />

              <div className="flex-grow">
                &nbsp;
              </div>
            </div>

            <div className="flex">
              <FormGroup
                type="date"
                label="Simple text field attachment:"
                name="default_date"
                className="flex-grow"
                range
              />

              <FormGroup
                type="date"
                label="Pre-defined ranges & callback:"
                name="default_date"
                className="flex-grow"
                range
                position="right"
              />
            </div>

            <div className="flex">
              <FormGroup
                type="date"
                label="Button class options:"
                name="default_date"
                className="flex-grow"
                range
              />

              <FormGroup
                type="date"
                label="Date picker inside button:"
                name="default_date"
                className="flex-grow"
                range
                position="right"
              />
            </div>
          </fieldset>
        </form>
      </Container>
    )
  }
}
