import React from 'react';

import { BrowserRouter } from 'react-router-dom';


import { Route } from 'utils/react-router';
import Routes from 'app/routes';
import { Navbar, PageHeader, PageFooter } from 'components';
import { Sidebar, View } from './app.styled';

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div id="app">
            <Navbar />
            <div className="flex flex-grow">
              <Sidebar />
              <div className="flex column flex-grow">
                <PageHeader />
                <View className="flex-grow">
                  <Routes />
                </View>
                <PageFooter />
              </div>
            </div>
          </div>
        </BrowserRouter>
      )
    }
}
