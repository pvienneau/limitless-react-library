import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';


import { Route } from 'utils/react-router';
import Routes from 'app/routes';
import { defer } from 'utils/js';
import { Navbar, PageHeader } from 'components';
import { Sidebar, View } from './app.styled';

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          {/* <div>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <div className="flex-grow">
                <PageHeader />
                <View>
                  <Routes />
                </View>
              </div>
            </div>
          </div> */}

          <Switch>
            {/* <Route path="/styleguide" render={defer('styleguide')} /> */}
            <Route path="/styleguide">
              <div>
                <Route exact path="/" render={defer('styleguide')} />
                <Route path="/buttons" render={defer('styleguide/buttons')} />
              </div>
            </Route>
            <Route path="/about" render={defer('about')} />
            {/* <Route path="/styleguide/buttons" render={defer('styleguide/buttons')} /> */}
            <Route render={defer('Not found')} />
          </Switch>
        </BrowserRouter>
      )
    }
}
