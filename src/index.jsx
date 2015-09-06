import React from 'react';
require('es6-object-assign').polyfill();

import Routes from './Routes'
import store from './store'

React.render(<Routes />, document.body);
