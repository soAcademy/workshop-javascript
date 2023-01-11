const powerFunc = (num) => {
  const result = num.map((r) => r ** 2);
  return result;
};

console.log(powerFunc([1, 2, 3, 4]));
