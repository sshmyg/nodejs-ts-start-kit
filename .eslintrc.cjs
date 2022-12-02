module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    'prettier',
  ],
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    curly: ['error', 'all'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-mixed-operators': 'off',
    'no-unused-vars': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array', readonly: 'array' },
    ],
    '@typescript-eslint/no-unused-vars': 'error',

    'prettier/prettier': 'error',
    'prefer-object-spread': 'error',
  },
};
