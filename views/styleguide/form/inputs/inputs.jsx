import React from 'react';

import range from 'lodash.range';

import { Container, Input, FormGroup } from 'components';
import './inputs.scss';

export default class Inputs extends React.Component {
  render() {
    return (
      <Container className="Inputs">
        <form>
          <fieldset>
            <legend>
              Basic inputs
            </legend>
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
            />
            <FormGroup
              type="password"
              label="Password"
              name="password"
            />
            <FormGroup
              type="text"
              label="Input with placeholder"
              placeholder="Enter your username"
              name="input_with_username"
            />
            <FormGroup
              type="text"
              label="Read only field"
              name="read_only"
              value="disabled"
              readOnly
            />
            <FormGroup
              type="text"
              label="Disabled"
              name="disabled"
              value="disabled"
              disabled
            />
            <FormGroup
              type="text"
              label="Predefined value"
              name="predefined_value"
              value="http://"
            />
            <FormGroup
              label="Textarea"
              name="textarea"
              placeholder="Default textarea"
              type="textarea"
            />
          </fieldset>
          <fieldset>
            <legend>
              Basic Selects
            </legend>
            <FormGroup
              label="Single select"
              type="select"
              options={[
                'Default select height',
                ...range(1, 8).map(num => `Option ${num}`)
              ]}
            />
            <FormGroup
              label="Multiple select"
              type="select"
              multiple
              options={[
                {
                  name: 'Amsterdam',
                  value: 'amsterdam',
                },
                {
                  name: 'Atlanta',
                  value: 'atlanta',
                },
                {
                  name: 'Baltimore',
                  value: 'baltimore',
                },
                {
                  name: 'Boston',
                  value: 'boston',
                },
                {
                  name: 'Buenos Aires',
                  value: 'buenos-aires',
                },
                {
                  name: 'Calgary',
                  value: 'calgary',
                },
                {
                  name: 'Chicago',
                  value: 'chicago',
                },
                {
                  name: 'Denver',
                  value: 'denver',
                },
              ]}
              value={[
                'amsterdam',
                'buenos-aires',
                'calgary',
              ]}
            />
          </fieldset>
        </form>
      </Container>
    );
  }
}
