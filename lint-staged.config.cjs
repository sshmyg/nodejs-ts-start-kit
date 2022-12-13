module.exports = {
  'src/*.ts': ['eslint --fix', 'prettier --ignore-unknown --write'],
  'src/**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
};
