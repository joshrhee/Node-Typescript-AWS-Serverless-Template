module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'plugin:eslint-comments/recommended',
    // 'plugin:jest/recommended',
    // 'plugin:promise/recommended',
    // 'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    'no-console': 'off',
    'no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any s ource code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default.

        // use <root>/path/to/folder/tsconfig.json.
        project: './tsconfig.json',
      },
    },
  },
};
