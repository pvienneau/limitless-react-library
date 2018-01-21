import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { Buttons, Palette, Icons, Inputs, Panels } from './'

export default class StyleguideRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/styleguide/buttons" component={Buttons} />
        <Route path="/styleguide/palette" component={Palette} />
        <Route path="/styleguide/panels" component={Panels} />
        <Route path="/styleguide/icons" component={Icons} />
        <Route path="/styleguide/form/inputs" component={Inputs} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
