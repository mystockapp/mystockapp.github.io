module.exports = {
  jsxBracketSameLine: false,
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  printWidth: 140,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [{
    files: '*.json',
    options: {
      parser: 'json'
    }
  }]
};