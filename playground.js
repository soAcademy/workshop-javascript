//console.log("Hello World");
//1
//const a = 1;
//2
//const b = "Hello";
//3
//const c = true;
//4
//const d = 10;
//5
//let e = 10;
//e = 20;
//6
//const myArray = [1, 2, 3];
//7
//const myObject = { x: 1, y: 2 };
//8
// const myObjects = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(myArray);
// console.log(myObject);
// console.log(myObjects);

//Scope Workshop
// const a = 10;
// function greet(){
//     const b = 20;
//     console.log(a+b);
// }
// greet()

// สามารถรันได้ console.log เข้าไปเรียน b ออกมาไม่ได้
// ต้องย้าย console.log ไว้ใน function

//function Workshop
// function sum1(a, b, c) {
//   return a + b + c;
// }
// console.log(sum1(1, 2, 3));

// const sum2 = (a, b, c) => {
//   return a + b + c;
// };
// console.log(sum2(1, 2, 3));

// const sum3 = (a, b, c) => {
//   return {
//     x: a.x + b.x + c.x,
//     y: a.y + b.y + c.y,
//   };
// };
// console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// const isOdd = (num) => {
//   return num % 2 !== 0;
// };
// console.log(isOdd(1)); // output: true
// console.log(isOdd(2)); // output: false

//Flow workshop
// const calculateBMI = (weight, height) => {
//   const bmi = weight / (height / 100) ** 2;
//   console.log(weight, height,bmi);
//   let grade = "please fill weight and height";
//   if (bmi < 18.5) {
//     grade = "underweight";
//   } else if (bmi < 25) {
//     grade = "healthy";
//   } else if (bmi < 30) {
//     grade = "overweight";
//   } else if (bmi >= 30) {
//     grade = "obesity";
//   }
//   return `Your BMI =: ${grade}`;  
// };
// console.log(calculateBMI(100,160));

// const average = (input) => {
//   let total = 0;
//   let averageResult;
//   for (let i = 0; i < input.length; i++) {
//     total += input[i];
//   }
//   averageResult = total / input.length;
//   console.log(`The average is: ${averageResult}`);
// };
// average([1, 2, 3, 4, 5]);

// const sumOdd = (inputs) => {
//   let total = 0;
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i] % 2 !== 0) {
//       total += inputs[i];
//     }
//   }
//   return `The sum of odd is: ${total}`;
// };
// console.log(sumOdd([1, 2, 3, 4, 5, 6, 7]));

const order = {name:'VitC',price:50}
const {name,price} = order;
const result = name+","+price
console.log(result);