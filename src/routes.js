import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

import App from './components/app';
import AppListContainer from './components/AppList/app_list_container';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={AppListContainer} />
  </Route>
);
