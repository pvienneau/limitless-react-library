import React from 'react';

import { BrowserRouter } from 'react-router-dom';


import { Route } from 'utils/react-router';
import Routes from 'app/routes';
import { Navbar, PageHeader } from 'components';
import { Sidebar, View } from './app.styled';

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
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
          </div>
        </BrowserRouter>
      )
    }
}
