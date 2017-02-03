module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    impliedStrict: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'upsilon'
  ],
  rules: {
    'upsilon/prototype-extentions': 'error',

    'prototype-extentions': 'error',
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'off',
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'callback-return': 'off',
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'off',
    'comma-style': ['error', 'last'],
    'complexity': 'error',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'generator-star-spacing': ['error', { before: false }],
    'global-require': 'error',
    'guard-for-in': 'off',
    'handle-callback-err': 'off',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { after: true, before: true }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'off',
    'no-continue': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'off',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'warn',
    'prefer-template': 'error',
    'quote-props': 'off',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'radix': 'off',
    'require-jsdoc': 'off',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'sort-imports': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: false, nonwords: false }],
    'spaced-comment': 'off',
    'strict': 'error',
    'template-curly-spacing': 'off',
    'unicode-bom': ['error', 'never'],
    'valid-jsdoc': 'off',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'off',
    'yield-star-spacing': 'error',
    'yoda': ['error', 'never'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'new-cap': ['error', { capIsNewExceptions: ['A', 'recurly.Pricing'] }],
    'no-mixed-spaces-and-tabs': 'error',
  },
};
