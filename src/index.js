import React from 'react';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './containers/App'
import About from './components/About'
import Inbox from './components/Inbox'

// Finally we render a `Router` component with some `Route`s, it'll do all
// the fancy routing stuff for us.
React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}/>
    </Route>
  </Router>
), document.body);
