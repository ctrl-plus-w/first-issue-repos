import chalk from 'chalk';

const color = 'red';
const message = 'My Title';
const light = false;

function capitalize<S extends string>(c: S) {
  return c.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase()) as Capitalize<S>;
}

const colorName = `bg${capitalize(color)}${light ? 'Bright' : ''}` as const;

console.log(chalk[colorName](message));
