module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
};
