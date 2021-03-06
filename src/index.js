import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/css/common.css';
// import * as serviceWorker from './serviceWorker';
// import logo from "./logo.svg";
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRoutes />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();