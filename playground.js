// console.log("Hello World");
// const a = 1;
// const b = "hello";
// const c = true;
// const d = 10;
// let e = 10;
// e = 20;
// const myArray = [1, 2, 3];
// const myObject = { x: 1, y: 2 };
// const myObjects = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];

// const a = "hello";
// function greet() {
//   console.log(a);
// }
// greet();
//can run because block scope

// const a = "hello";
// function greet() {
//   a = "hi";
// }
// console.log();
//ทำงานไม่ได้เพราะ hi อยู่ใน block scope

// const a = 10;
// function greet() {
//   const b = 20;
//   console.log(a + b);
// }
// greet();

// function sum1(a, b, c) {
//   return a + b + c;
// }

// console.log(sum1(1, 2, 3));

// const sum2 = (a, b, c) => {
//   return a + b + c;
// };

// console.log(sum2(1, 2, 3));

// const sum3 = (a, b, c) => {
//   return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
// };

// sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 });

// const isOdd = (num) => {
//   return num % 2 !== 0;
// };
// console.log(isOdd(7));

// const calculateBMI = (weight, height) => {
//   const numBmi = weight / (height / 100) ** 2;
//   let grade = "";
//   if (numBmi < 18.5) {
//     grade = "underweight";
//   } else if (numBmi < 25) {
//     grade = "healthy";
//   } else if (numBmi < 30) {
//     grade = "overweight";
//   } else {
//     grade = "obesity";
//   }
//   return `Your BMI grade is: ${grade}`;
// };
// console.log(calculateBMI(53, 158));

// const average = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum = sum + input[i];
//   }
//   return sum / input.length;
// };
// console.log(average([1, 2, 3, 4]));

// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       sum = sum + input[i];
//     }
//   }
//   return sum;
// };
// console.log(sumOdd([1, 8, 9, -3, 0, 4]));
const order = { name: "VitC", price: 50 };
const { price } = order;
console.log(price);
