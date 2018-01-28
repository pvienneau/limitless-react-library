import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { Buttons, Dropdowns, Palette, Icons, Inputs, Panels, Checkboxes, Menus } from './'

export default class StyleguideRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/styleguide/buttons" component={Buttons} />
        <Route path="/styleguide/dropdowns" component={Dropdowns} />
        <Route path="/styleguide/palette" component={Palette} />
        <Route path="/styleguide/panels" component={Panels} />
        <Route path="/styleguide/icons" component={Icons} />
        <Route path="/styleguide/menus" component={Menus} />
        <Route path="/styleguide/form/inputs" component={Inputs} />
        <Route path="/styleguide/form/checkboxes" component={Checkboxes} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
