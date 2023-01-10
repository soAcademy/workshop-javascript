// const a =1;
// const b = "hello";
// const c = true;
// const d = 10;
// let e = 10;
// e = 20;
// let myArray = [1,2,3,];
// let myObject = {x:1, y:2};
// let myObjects = [{x:1, y:2}, {x:3, y:4}];
// console.log(myObjects);

// const a = "hello";
// function greet() {
//   console.log(a);
// }
// greet();

// let a = "hello";
// function greet() {
//   return (a = "hi");
// }
// console.log(greet());

// let a = 10;
// function greet() {
//   const b = 20;
//   return a + b;
// }
// console.log(greet());

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
// console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// const isOdd = (num) => {
//   return num % 2 !== 0;
// };
// console.log(isOdd(7));

// const calculateBMI = (weight, height) => {
//   let BMI = weight / (height / 100) ** 2;
//   let grade = ``;
//   grade =
//     BMI < 18.5
//       ? `underweight`
//       : BMI < 25
//       ? `healthy`
//       : BMI < 30
//       ? `overweight`
//       : `obesity`;
//   console.log(`Your BMI grade is: ${grade}`);
// };
// calculateBMI(61, 170);

const average = (inputs) => {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i];
  }
  average = sum / inputs.length;
  return average;
};
console.log(`The average is: ${average([1, 2, 3, 4])}`);

// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) sum += input[i];
//   }
//   return sumOdd;
// }
// console.log(`The sum of odd is: ${sumOdd([1, 8, 9, -3, 0, 4])}`);

// const order = { name: "VitC", price: 50 };
// // const { price } = order;

// // console.log(`The price is: ${price}`);

// const getprice = ({ price }) => {
//   return price;
// };

// console.log(`The price is: ${getprice({ price: 50 })}`);

// class Animal {
//   constructor(_legs) {
//     this.legs = _legs;
//   }
//   amountOfLegs() {
//     console.log(`I have ${this.legs} legs`);
//   }
// }
// const animal = new Animal(2);
// animal.amountOfLegs();

// class Dog extends Animal {
//   makeNoise() {
//     console.log("Bark");
//   }
// }
// const dog = new Dog(4);
// dog.amountOfLegs();
// dog.makeNoise();
