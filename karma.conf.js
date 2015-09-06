module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/app.tests.js'
    ],
    exclude: [],
    preprocessors: {
      'src/app.tests.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    webpack: require('./webpack.config.test'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
