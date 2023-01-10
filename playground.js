// let a = 1;
// let b = "hello";
// let c = true;
// const d = 10;
// let e = 10;
// e = 20;
// const myArray = [1, 2, 3];
// const myObject = { x: 1, y: 2 };
// const myObjects = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];

// console.log(a, b, c, d, e);
// console.log(myArray);
// console.log(myObjects);

// //Scope Workshop

// const f = "hello";
// function greet() {
//   console.log(f);
// }
// greet();

// let h = "hello";
// function greet1() {
//   h = "hi";
//   console.log(h);
// }
// greet1();

// const i = 10;
// function great() {
//   const j = 20;
//   console.log(i + j);
// }

// great();

// //Functions Workshop
// function sum1(a, b, c) {
//   return a + b + c;
// }

// const sum2 = (a, b, c) => {
//   return a + b + c;
// };

// const sum3 = (a, b, c) => {
//   return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
// };

// const isOdd = (num) => {
//   return num % 2 !== 0;
// };

// console.log(sum1(20, 30, 40));
// console.log(sum2(20, 30, 40));
// console.log(sum3({ x: 20, y: 20 }, { x: 30, y: 30 }, { x: 40, y: 40 }));
// console.log(isOdd(20));

// //Flow Control Workshop
// const calculateBMI = (weight, height) => {
//   const bmi = weight / (height / 100) ** 2;
//   let grade = "";
//   if (bmi < 18.5) {
//     grade = "underwight";
//   } else if (18.5 <= bmi < 25) {
//     grade = "healthy";
//   } else if (25 <= bmi < 30) {
//     grade = "overweight";
//   } else {
//     grade = "obesity";
//   }
//   return grade;
// };

// console.log(calculateBMI(55, 55));

// const average = (input) => {
//   let sum = 0;
//   let average = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   average = sum / input.length;
//   return average;
// };

// console.log(average([1, 2, 3, 4]));

// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) sum += input[i];
//   }
//   return sum;
// };

// console.log(sumOdd([1, 2, 3, 4]));
// Destructuring

// const order = {name: 'Teak', price: 50};
// const price = order;

// const getPrice = ({price}) => {
//   return price;
// }

// console.log(getPrice(price));

// Class Workshop
class Animal {
  constructor(_legs) {
    this.leg = _legs;
  }
  amountOfLegs() {
    return this.leg;
  }
}

const animal = new Animal(4);
console.log(animal.amountOfLegs());

class Dog extends Animal {
  makeNoise() {
    return "Bark";
  }
}

const dog = new Dog(4);

console.log(dog.makeNoise());
