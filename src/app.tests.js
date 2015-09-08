import 'babel-core/polyfill';
require('isomorphic-fetch');

let context = require.context('.', true, /-test\.jsx?$/)
context.keys().forEach(context)
