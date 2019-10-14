/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';

//
import Navbar from 'containers/Navbar/Loadable';
//
import GlobalStyle from '../../global-styles';
import SideBar from 'containers/Sidebar/Loadable';
export default function App() {

  return (
    <div>
      <div>
        <SideBar />
        <div className="container-fluid px-0">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
      </div>
    </div>
  );
}
