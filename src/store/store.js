import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const middleware = [];
middleware.push(thunk);

// const loggerMiddleware = createLogger({
//   predicate: () => process.env.NODE_ENV !== 'production',
// });
// middleware.push(loggerMiddleware);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
  ),
);

export default store;
