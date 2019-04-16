import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import HomePage from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MenuContainer from "./Pages/Menu";
import Cart from "./Pages/Cart";
import SassPage from "./Pages/Sass";
import Login from "./Pages/Login";
import BookList from "./Pages/BookList";
import BookDetail from "./Pages/BookList/BookDetail";
import CommonLayout from './Components/CommonLayout';

export default class AppRoutes extends Component {
  state = {
    Auth : {
      isAuthenticated : false,
    }
  };
  handleAuth = (login) => {
    const { Auth } = this.state;
    const authStateUpdate = {...Auth};
    if (login) {
      authStateUpdate.isAuthenticated = true;
      this.setState({Auth: authStateUpdate})
    } else {
      authStateUpdate.isAuthenticated = false;
      this.setState({Auth: authStateUpdate})
    }
  };
  render() {
    const { Auth } = this.state;
    const PrivateRoute = ({ component, ...rest }) => (
      <Route {...rest} render={props => (
        Auth.isAuthenticated ? (
          <Switch>
            {/*<Component {...props} />*/}
            <CommonLayout exact path="/book-list" component={BookList} />
            <CommonLayout exact path="/book-detail" component={BookDetail} />
          </Switch>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}/>
        )
      )}/>
    );
    return(
      <BrowserRouter>
        <Switch>
          <CommonLayout exact path="/" component={HomePage} />
          <CommonLayout exact path="/about-us" component={AboutUs} />
          <CommonLayout exact path="/menu" component={MenuContainer} />
          <CommonLayout exact path="/cart" component={Cart} />
          <CommonLayout exact path="/sass" component={SassPage} />
          <CommonLayout exact path="/login" component={Login} handleAuth={this.handleAuth}/>
          <PrivateRoute />
        </Switch>
      </BrowserRouter>
    )
  }
}