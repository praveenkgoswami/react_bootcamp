import React, { Component } from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import HomePage from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CommonLayout from './Components/CommonLayout';

export default class AppRoutes extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          {/*<Route path="/about-us" component={AboutUs} />*/}
          <CommonLayout exact path="/" component={HomePage} />}
          <CommonLayout exact path="/about-us" component={AboutUs} />}
        </Switch>
      </BrowserRouter>
    )
  }
}