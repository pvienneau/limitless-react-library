import React from 'react';

import { Container, Input, FormGroup } from 'components';
import './inputs.scss';

export default class Inputs extends React.Component {
  render() {
    return (
      <Container className="Inputs">
        <FormGroup
          label="Default text input"
          name="default_text_input"
        />
        <FormGroup
          type="password"
          label="Password"
          name="password"
        />
        <FormGroup
          label="Input with placeholder"
          placeholder="Enter your username"
          name="input_with_username"
        />
        <FormGroup
          label="Read only field"
          name="read_only"
          value="disabled"
          readonly
        />
        <FormGroup
          label="Disabled"
          name="disabled"
          value="disabled"
          disabled
        />
        <FormGroup
          label="Predefined value"
          name="predefined_value"
          value="http://"
        />
      </Container>
    );
  }
}
