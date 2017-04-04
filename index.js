'use strict';

module.exports = {
  extends: require.resolve('./base'),
  plugins: [
    'upsilon',
  ],
  rules: {
    'upsilon/prototype-extentions': 'error',
  },
}
