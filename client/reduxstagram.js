import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import {
  Router,
  Route,
  IndexRoute,
  browserHistory } from 'react-router';

import { Provider } from 'react-redux'; // bindings that allow redux usage with React
// store can be import without curly braces because it's a default export
// whereas history is a named export (const history)
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url).install();

// Provider tag exposes store to our app
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
