// .eslintrc.cjs
module.exports = {
    env: {
      node: true,        // Allows Node.js global variables
      es2021: true       // Supports modern ECMAScript
    },
    extends: [
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module' // Supports ES modules
    },
    rules: {
      'no-undef': 'off'    // Disables require() undefined errors
    }
  }