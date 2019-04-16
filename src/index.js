import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './assets/css/common.css';
// import * as serviceWorker from './serviceWorker';
// import logo from "./logo.svg";
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();