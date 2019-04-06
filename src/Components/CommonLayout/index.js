import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

class CommonLayout extends PureComponent {
  state = {
    countValue : 0,
  };

  updateCount = () => {
    const { countValue } = this.state;
    this.setState({
      countValue : countValue + 1,
    })
  };

  render() {
    const { component: Component, path, ...rest } = this.props;
    const { countValue } = this.state;
    return (
      <Route
        {...rest}
        render={matchProps => (
      <React.Fragment>
        <Header countValue = {countValue} path={path}/>
        <main>
          <Component
            {...matchProps}
            updateCount={()=>this.updateCount()}
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