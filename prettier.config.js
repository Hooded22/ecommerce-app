const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
