import 'babel-core/polyfill';
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
require('isomorphic-fetch');

let context = require.context('.', true, /-test\.jsx?$/)
context.keys().forEach(context)
