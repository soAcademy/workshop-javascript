// Q1: Find second max number using .reduce (avoid using forEach, if/else, sort)
// Hint: Reduce acc object should intialize with {max: -999999, secondMax: -999999}

const secondMax = (nums) => {
  const result = nums.reduce(
    (result, num) => {
      // compare current secondMax to current num
      const comparedNum = result.secondMax > num ? result.secondMax : num;
      // compare current max to comparedNum
      return {
        max: result.max > comparedNum ? result.max : comparedNum,
        secondMax: result.max > comparedNum ? comparedNum : result.max,
      };
    },
    { max: -999999, secondMax: -999999 }
  );
  return result.secondMax;
};

console.log(secondMax([15, 20, 35, 36, 38, 99, 30, 28]));

// Q2: Given stock prices calculate rate of return by using .reduce / .map
const stockPrices = [100, 120, 130, 145, 120, 110, 150];
const calROC = (prices, n) => {
  return prices.map((price, idx) => {
    return idx - n >= 0
      ? {
          price: price,
          roc:
            Math.round((price / prices[idx - n] - 1 + Number.EPSILON) * 1000) /
            1000,
        }
      : {
          price: price,
          roc: null,
        };
  });
};
console.table(calROC(stockPrices, 2));
