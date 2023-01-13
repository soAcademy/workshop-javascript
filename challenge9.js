// Q1: Calculate Fibonacci using reduce
// 0 1 1 2 3 5 8 13 21
const fib = (number) => {
  // make array of numbers from 0 to n-1
  const numArray = [...Array(number).keys()];

  const fib = numArray.reduce(([a, b], _) => [b, b + a], [0, 1])[0];

  return fib;
};

// 13
// note: fib(6) should be the value at index 6 of the Fibonacci series
// (index starts from 0)
console.log("Q1:");
console.log(fib(6));
// result is 8

// Q2: Calculate Fibonacci series using reduce

const fibSeries = (number) =>
  [...Array(number).keys()]
    .reduce(
      (accArray, num) => [
        ...accArray,
        accArray[accArray.length - 1] + accArray[accArray.length - 2],
      ],
      [0, 1]
    )
    .slice(0, number);

// 13
// note: fibSeries(7) should be an array of first 7 Fibonacci numbers
console.log("\nQ2:");
console.log(fibSeries(7));
// result is [0, 1, 1, 2, 3, 5, 8];
