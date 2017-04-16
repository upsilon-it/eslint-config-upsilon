'use strict';

module.exports = {
  extends: require.resolve('./base'),
  plugins: [
    '@upsilon/ember',
  ],
  rules: {
    '@upsilon/ember/prototype-extentions': 'error',
  },
}
