import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

class CommonLayout extends PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={matchProps => (
      <React.Fragment>
        <Header/>
        <main>
          <Component
            {...matchProps}
          />
        </main>
        <Footer/>
      </React.Fragment>
    )}
    />
    )
  }
}

export default CommonLayout;