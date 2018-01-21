import React from 'react';

import { Switch, Route } from 'react-router-dom'

import { Dashboard } from 'views';
import Styleguide from 'views/styleguide/styleguide.router';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/styleguide" component={Styleguide} />
        <Route component={Dashboard} />
      </Switch>
    );
  }
}
