import React, { Component } from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import HomePage from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MenuContainer from "./Pages/Menu";
import Cart from "./Pages/Cart";
import CommonLayout from './Components/CommonLayout';

export default class AppRoutes extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          {/*<Route path="/about-us" component={AboutUs} />*/}
          <CommonLayout exact path="/" component={HomePage} />}
          <CommonLayout exact path="/about-us" component={AboutUs} />}
          <CommonLayout exact path="/menu" component={MenuContainer} />}
          <CommonLayout exact path="/cart" component={Cart} />}
        </Switch>
      </BrowserRouter>
    )
  }
}