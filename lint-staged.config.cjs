module.exports = {
  'src/*.ts': ['eslint --fix', 'pretty-quick --staged'],
  'src/**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
};
