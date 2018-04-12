import React from 'react'

import { Route } from 'utils/react-router'
import {
  Buttons,
  Dropdowns,
  Palette,
  Icons,
  Inputs,
  Panels,
  Checkboxes,
  Menus,
  DatePickers,
  InputGroups,
  Selects,
  Tabs,
  Popups,
} from './'

export default class StyleguideRouter extends React.Component {
  render () {
    return (
      <Route path="styleguide">
        <div>
          <Route path="buttons" component={Buttons} />
          <Route path="dropdowns" component={Dropdowns} />
          <Route path="palette" component={Palette} />
          <Route path="panels" component={Panels} />
          <Route path="icons" component={Icons} />
          <Route path="menus" component={Menus} />
          <Route path="tabs" component={Tabs} />
          <Route path="popups" component={Popups} />
          <Route path="form/inputs" component={Inputs} />
          <Route path="form/checkboxes" component={Checkboxes} />
          <Route path="form/input-groups" component={InputGroups} />
          <Route path="form/selects" component={Selects} />
          <Route path="form/pickers/date-pickers" component={DatePickers} />
        </div>
      </Route>
    )
  }
}
