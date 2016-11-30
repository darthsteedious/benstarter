import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Routes from './routes';

import * as reducers from 'main/modules';

const store = createStore(combineReducers(reducers), {}, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <Routes />
  </Provider>
, document.getElementById('main-root'));