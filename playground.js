// const a = 1;
// const b = "hello world!";
// const c = true;
// const d = 10;
// let e = 10;
// e = 20;
// const myArray = [1, 2, 3];
// const myObject = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];

// console.log(a, b, c, d, e);
// console.log(myArray);
// console.log(myObject);

// const a1 = "hello";
// function greet() {
//   console.log(a1);
// }
// greet();

// const a2 = "hello";
// function great() {
//   a2 = "hi";
// }
// console.log(a2);

// const a3 = 10;
// const b2 = 20;
// function greet2() {
//   const b2 = 20;
// }

// greet2();
// console.log(a3 + b2);

// function sum1(a, b, c) {
//     let result = a + b + c;
// console.log(a, b, c);
//     return result;
// }
// console.log(sum1(3,4,5))

// const sum2 = (a, b, c) => {
//     const result = a + b + c;
//     return result;
// }
// console.log(sum2(2,3,4))

// const sum3 = (a, b, c) => ({x: a.x + b.x + c.x, y: a.y + b.y + c.y});
// const a = {x: 1, y: 2};
// const b = {x: 3, y: 4};
// const c = {x: 5, y: 6};
// const result = sum3(a, b, c);
// console.log(result); // Output: {x: 9, y: 12}

// const isOdd = n => n % 2 !== 0;
// const odd = isOdd(3);
// console.log(odd); // Output: true
// const even = isOdd(4);
// console.log(even); // Output: false

// function calculateBMI(weight, height) {
//   const bmi = weight / (height / 100) ** 2;
//   if (bmi < 18.5) {
//     return "underweight";
//   } else if (bmi < 25) {
//     return "healthy";
//   } else if (bmi < 30) {
//     return "overweight";
//   } else {
//     return "obesity";
//   }
// }
// const bmiGrade = calculateBMI(70, 170);
// console.log(bmiGrade);

// function average(input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   return sum / input.length;
// }
// const inputArray = [4, 8, 16, 32];
// const avg = average(inputArray);
// console.log(avg); // Output: 2.5

// function sumOdd(input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       sum += input[i];
//     }
//   }
//   return sum;
// }
// const inputArray1 = [1, 8, 9, -3, 0, 4];
// const sum = sumOdd(inputArray1);
// console.log(sum); // Output: 7


const order = { name: 'VitC', price: 50 };
const { price } = order;
console.log(price)


const getPrice1 = ({price1}) => {
  return price1;
};
const order1 = { name1: 'VitC1', price1: 60 };
console.log(getPrice1(order1));