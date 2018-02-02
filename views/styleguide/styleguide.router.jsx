import React from 'react';

import { Switch, Redirect } from 'react-router';

import { Route } from 'utils/react-router';
import { Buttons, Dropdowns, Palette, Icons, Inputs, Panels, Checkboxes, Menus } from './'
import { defer } from 'utils/js';

export default class StyleguideRouter extends React.Component {
  render() {
    return (
      <Route path="styleguide">
        <div>
          <Route path="buttons" component={Buttons} />
          <Route path="dropdowns" component={Dropdowns} />
          <Route path="palette" component={Palette} />
          <Route path="panels" component={Panels} />
          <Route path="icons" component={Icons} />
          <Route path="menus" component={Menus} />
          <Route path="form/inputs" component={Inputs} />
          <Route path="form/checkboxes" component={Checkboxes} />
        </div>
      </Route>
    );
  }
}
