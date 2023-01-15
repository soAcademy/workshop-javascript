// Calculate fibbonacci using reduce
const fibbonacciSum = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.reduce((acc, r) => acc + r, 0);
};

console.log(fibbonacciSum(9));

const fibbonacciArray = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibbonacciArray(9));