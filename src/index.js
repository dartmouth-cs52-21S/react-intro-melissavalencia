// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
// import $ from 'jquery';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
// >>>>>>> 1bab4ac15fcc656c55e8339c969e92f4216245de

import App from './components/app';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);

// let sec = 0;
// setInterval(() => { $('#main').html(`You have been on this page for ${sec} seconds.`); sec += 1; }, 1000);
