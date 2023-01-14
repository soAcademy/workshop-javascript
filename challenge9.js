// Q1: Calculate fibbonacci using reduce
// 0 1 1 2 3 5 8 13 21

// const fib = (n) =>
//   [...Array(n).keys()].reduce(
//     (acc, _r) => {
//       const vt = acc.v1;
//       acc.v1 = acc.v1 + acc.v0;
//       acc.v0 = vt;
//       return acc;
//     },
//     { v0: 0, v1: 1 }
//   ).v1;
// console.log(fib(6)); //output = 13

// const n = 9;
// const fibonacci = Array.from({length: n}).reduce((fib, _, i) => i < 2 ? fib.concat(i) : fib.concat(fib[i-1] + fib[i-2]), []);
// console.log(fibonacci);
// const fib = (n) => {
//   let v0 = 0, v1 = 1;
//   for (let i = 2; i <= n; i++) {
//       const vt = v1;
//       v1 = v0 + v1;
//       v0 = vt;
//   }
//   return v1;
// }
// console.log(fib(6)); //output = 8

const fib = (n) => {
  let v0 = 0, v1 = 1;
  for (let i = 0; i < n; i++) {
      const vt = v1;
      v1 = v0 + v1;
      v0 = vt;
  }
  return v1;
}
console.log(fib(6)); //output = 13



// Q2: Calculate fibbonacci series using reduce

const fibSeries = (n) =>
  [...Array(n).keys()].reduce((acc, _) => [...acc, acc[acc.length - 1] + acc[acc.length - 2]], [0, 1]);
console.log(fibSeries(7)); //output = [0, 1, 1, 2, 3, 5, 8, 13, 21]


// const fibSeries = (n) =>
//   [...Array(n).keys()].reduce(
//     (acc, _r) => {
//       acc = [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
//       return acc;
//     },
//     [0, 1]
//   );

// // 13
// console.log(fibSeries(7));
