module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
