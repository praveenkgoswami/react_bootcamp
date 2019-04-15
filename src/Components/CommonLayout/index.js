import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from "../Header";
import Footer from "../Footer";
import { updateCountValue} from "../../storeManager/common/actions";

const mapDispatchToProps = dispatch => ({
  updateCountValue: bindActionCreators(updateCountValue, dispatch),
});
class CommonLayout extends PureComponent {
  state = {
    // countValue : 0,
  };

  updateCount = () => {
    // const { countValue } = this.state;
    const { updateCountValue } = this.props;
    updateCountValue();
    console.log('props', this.props)
    /*this.setState({
      countValue : countValue + 1,
    })*/
  };

  render() {
    const { component: Component, path, ...rest } = this.props;
    // const { countValue } = this.state;
    return (
      <Route
        {...rest}
        render={matchProps => (
      <React.Fragment>
        <Header path={path}/>
        <main>
          <Component
            {...rest}
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

export default connect(null, mapDispatchToProps)(CommonLayout);