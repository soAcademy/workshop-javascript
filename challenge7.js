// Q1: Find second max number using .reduce (avoid using forEach, if/else, sort)
// Hint: Reduce acc object should intialize with {max: -999999, secondMax: -999999}

const findSecondMax = (numbers) =>
  numbers.reduce(
    (acc, r) => ({
      max: Math.max(acc.max, r),
      // secondMax: r >= acc.max ? acc.max : Math.max(acc.secondMax, r)
      secondMax: Math.max(acc.secondMax, Math.min(acc.max, r)),
    }),
    { max: -999999, secondMax: -999999 }
  ).secondMax;

const numbers = [1, 3, 7, 4, 9, 11, 6];
console.log(findSecondMax(numbers)); // Output: 9
