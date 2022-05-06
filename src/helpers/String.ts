export const getLabelsParam = (labels: Array<string>): string => {
  return labels.map(encodeURIComponent).join(',');
};

export const capitalize = <S extends string>(str: S) => {
  return (str[0].toUpperCase() + str.slice(1)) as Capitalize<S>;
};

// export const capitalize = <S extends string>(c: S) => {
//   return c.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase()) as Capitalize<S>;
// }

export const multiplyChar = (char: string, amount: number): string => {
  return new Array(amount).fill(char).join('');
};

export const labelMapper = (labels: Array<{ name: string }>): string => {
  return labels.map((label) => `"${label.name}"`).join(', ');
};
