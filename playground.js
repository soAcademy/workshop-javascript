// Workshop#1

// const a = 1;
// console.log("a :", a);
// const b = "hello";
// console.log("b :", b);
// const c = true;
// console.log("c :", c);
// const d = 10;
// console.log("d :", d);
// let e = 10;
// console.log("e :", e);
// e = 20;
// console.log("e :", e);
// const myArray = [1, 2, 3];
// console.log("myArray :", myArray);
// const myObject = { x: 1, y: 2 };
// console.log("myObject :", myObject);
// const myObjects = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];
// console.log("myObject :", myObject);

// Workshop#2

// Quiz 1
// const a = "hello";
// function greet() {
//   console.log(a);
// }
// greet();

// Quiz 1 Answer = "hello" can run with no error

// Quiz 2
// const a = "hello";
// function greet() {
//   a = "hi";
// }
// console.log(a);*/

// Quiz 2 Answer = "hello" can run with no error
// or change code to be this if wannt to change a = hi
// let a = "hello";
// function greet() {
//   a = "hi";
//   console.log(a);
// }
// greet();

// Quiz 3
// const a = 10;
// function greet() {
//   const b = 20;
// }
// greet();
// console.log(a + b);

// Quiz 3 Answer = Error due to b is in function greet() move code as below
// const a = 10;
// function greet() {
//   const b = 20;
//   console.log(a + b);
// }
// greet();

// Workshop#3

//Quiz 1
// function sum1(a, b, c) {
//   return a + b + c;
// }
// console.log(sum1(1, 2, 3));

// // Quiz 2
// const sum2 = (a, b, c) => a + b + c;
// console.log(sum2(1, 2, 1));

// // Quiz 3
// const sum3 = (a, b, c) => ({ x: a.x + b.x + c.x, y: a.y + b.y + c.y });
// console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// // Quiz 4
// const isOdd = (x) => x % 2 !== 0;
// console.log(isOdd(13));

// Workshop#4

// Quiz 1
// const calculateBMI = (weight, height) => {
//   let bmi = weight / (height / 100) ** 2;
//   let a = "";
//   if (bmi <= 18.5) {
//     a = "underweight";
//   } else if (bmi < 25) {
//     a = "healthy";
//   } else if (bmi < 30) {
//     a = "overweight";
//   } else {
//     a = "obesity";
//   }
//   return a;
// };
// console.log(`Your BMI grade = ${calculateBMI(60, 172)}`);

// //Quiz 2
// const average = (a) => {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum / a.length;
// };
// console.log(`Average = ${average([1, 2, 3, 4])}`);

// //Quiz 3
// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 != 0) {
//       sum += input[i];
//     }
//   }
//   return sum;
// };
// console.log(`Sum odd no. = ${sumOdd([1, 8, 9, -3, 0, 4])}`);

// Workshop#5
// Quiz 1
const order = { name: "VitC", price: 50 };
const { price } = order;
console.log(price);

// Quiz 2
const getPrice = ({ price }) => {
  return price;
};
console.log(getPrice(order));
