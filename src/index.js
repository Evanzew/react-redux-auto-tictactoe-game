import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import RouteApp from './components/RouteApp/RouteApp';
import ReactDOM from 'react-dom';
import gameApp from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
let store = createStore(gameApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={RouteApp} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
