module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,  // Changed from es2020 to es2021
    node: true,    // Added this line to allow for Node.js globals like 'require' and 'exports'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', // This will automatically select the latest ECMAScript version
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2'
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

