// Q1: Calculate fibbonacci using reduce
// 0 1 1 2 3 5 8 13 21

// const fib = (times) => {
//   // console.log([...Array(times).keys()]);
//   const result = [...Array(times).keys()].reduce((acc, r) => {
//     return [...acc, (acc[acc.length - 2] + acc[acc.length - 1])];
//   }, [0,1]);
//   return result[[result.length - 1]];

//   // if (times === 0) {
//   //   return [0, 1];
//   // } else {
//   //   const arr = fib(times - 1);
//   //   const result = [...arr, (arr[arr.length - 2] + arr[arr.length - 1])];
//   //   // console.log(result);
//   //   return result;
//   // }
// }
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));

//SOLUTION:-----------------------------
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

// 13
// console.log(fib(6));

// Q2: Calculate fibbonacci series using reduce

















//SOLUTION:----------------------------------------------------------------
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
