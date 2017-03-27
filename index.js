'use strict';

const merge = require('lodash.merge');
const base = require('./base');

module.exports = merge(base, {
  plugins: [
    'upsilon',
  ],
  rules: {
    'upsilon/prototype-extentions': 'error',
  },
});
