import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexRedirect
} from'react-router';

import AppContainer from 'main/container/AppContainer';
import UsersView  from 'main/components/users/UsersView';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={UsersView} />
      </Route>
    </Router>
  );
}