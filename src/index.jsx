import React from 'react';

import 'babel-core/polyfill';
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('isomorphic-fetch');

import Routes from './Routes'
import store from './store'

React.render(<Routes />, document.body);
