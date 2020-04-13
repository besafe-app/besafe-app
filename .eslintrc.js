module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'prettier', 'detox', 'react-hooks'],
  parser: 'babel-eslint',
  globals: {
    __DEV__: true,
    detoxCircus: true,
    fetch: false
  },
  env: {
    jest: true,
    'detox/detox': true
  },
  rules: {
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        groups: ['external', ['internal', 'sibling']]
      }
    ]
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
