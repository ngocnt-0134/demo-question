module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'default-case': 0,
    // "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
};