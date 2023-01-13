// Q1: Find second max number using .reduce (avoid using forEach, if/else, sort)
// Hint: Reduce acc object should intialize with {max: -999999, secondMax: -999999}

// const findSecondMax = (arr) => {
//   const getMax = Math.max(...arr);
//   // console.log(getMax);
//   const filMax = arr.filter(x => x !== getMax);
//   // console.log(filMax);
//   const getSecond = Math.max(...filMax);
//   return getSecond;
// };

// const someArray = [1, 3, 7, 4, 9, 11, 6];
// console.log(findSecondMax(someArray));

//SOLUTION:----------------------------------------------------------------
// const findSecondMax = (numbers) =>
//   numbers.reduce(
//     (acc, r) => ({
//       max: Math.max(acc.max, r),
//       // secondMax: r >= acc.max ? acc.max : Math.max(acc.secondMax, r)
//       secondMax: Math.max(acc.secondMax, Math.min(acc.max, r)),
//     }),
//     { max: -999999, secondMax: -999999 }
//   ).secondMax;

// const numbers = [1, 3, 7, 4, 9, 11, 6];
// console.log(findSecondMax(numbers)); // Output: 9

// // Q2: Given stock prices calculate rate of return by using .reduce / .map

const calculateROC = (prices) => {
  const pricesShift = [...prices];
  pricesShift.shift();
  // console.log(prices);
  // console.log(pricesShift);

  const cal = pricesShift.map((r, index) => {
    return ((r - prices[index]) / prices[index] );
  });
  return cal;
}

const stockPrices = [100, 105, 103, 99, 95, 98, 101, 104];
console.log(calculateROC(stockPrices));

//SOLUTION:----------------------------------------------------------------
// const calculateROC = (stockPrices) =>
//   stockPrices
//     .reduce(
//       (acc, price) => ({
//         previousPrice: price,
//         idx: (acc.idx ?? 0) + 1,
//         rocs: [...acc.rocs, acc.idx === 0 ? 0 : price / acc.previousPrice - 1],
//       }),
//       { previousPrice: 0, idx: 0, rocs: [] }
//     )
//     .rocs.slice(1);

// const stockPrices = [100, 105, 103, 99, 95, 98, 101, 104];
// console.log(calculateROC(stockPrices));
