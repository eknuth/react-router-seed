import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import { Provider } from 'react-redux';

import App from './containers/App'
import Trees from './components/Trees'
import Inbox from './components/Inbox'
import store from './store'

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

history.addChangeListener(() => {
  console.log('location change', arguments)
});

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'trees', component: Trees },
    { path: 'inbox', component: Inbox },
  ]
};

export default class Routes extends Component {
  render () {
      return (
          <div>
            <Provider store={store}>
              {() =>  <Router history={history} children={routes}></Router> }
            </Provider>
            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
          </div>
      )
  }
}
