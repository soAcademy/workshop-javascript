// Q1: Calculate fibbonacci using reduce

const fib = (n) =>
  [...Array(n).keys()].reduce(
    (acc, r) => {
      const vt = acc.v1;
      acc.v1 = acc.v1 + acc.v0;
      acc.v0 = vt;
      return acc;
    },
    { v0: 0, v1: 1 }
  ).v1;

// 13
console.log(fib(6));

// Q2: Calculate fibbonacci series using reduce

const fibSeries = (n) =>
  [...Array(n).keys()].reduce(
    (acc, r) => {
      acc = [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
      return acc;
    },
    [0, 1]
  );

// 13
console.log(fibSeries(7));
