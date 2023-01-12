// Variables Workshop

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

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(myArray);
// console.log(myObject);
// console.log(myObjects);

// Scope Workshop

// const a1 = "hello";
// function greet() {
//   console.log(a1);
// }
// greet();

// const a2 = "hello";
// function greet1() {
//   a = "hi";
// }
// console.log(a2);

// let a3 = "hello";
// function greet3() {
//   a3 = "hi";
// }
// greet3();
// console.log(a3);

// const a4 = 10;
// function greet4() {
//   const b2 = 20;
// }
// greet4();
// console.log(a4 + b2);

// const a4 = 10;
// function greet4() {
//   const b2 = 20;
//   console.log(a4 + b2);
// }
// greet4();

// Functions Workshop + Arrow Function

// function sum1(a, b, c) {
//   return a + b + c;
// }
// console.log(sum1(1, 2, 3));

// const sum2 = (a, b, c) => a + b + c;
// console.log(sum2(1, 2, 3));

// const sum3 = (a, b, c) => ({ x: a.x + b.x + c.x, y: a.y + b.y + c.y });
// console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// const isOdd = (num) => num % 2 !== 0;
// console.log(isOdd(9));

// Flow Control Workshop

// const calculateBMI = (weight, height) => {
//   const bmi = weight / (height / 100) ** 2;
//   let score;
//   if (bmi < 18.5) {
//     score = "underweight";
//   } else if (bmi < 25) {
//     score = "healthy";
//   } else if (bmi < 30) {
//     score = "overweight";
//   } else {
//     score = "obesity";
//   }
//   return `Body mass index (BMI) is: ${score}`;
// };

// console.log(calculateBMI(70, 175));

// const average = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   return sum / input.length;
// };

// console.log(average([1, 2, 3, 4]));

// const sumOdd = (input2) => {
//   let sum = 0;
//   for (let i = 0; i < input2.length; i++) {
//     if (input2[i] % 2 !== 0) {
//       sum = sum + input2[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOdd([1, 8, 9, -3, 0, 4]));

// Destructuring Workshop

// const order = { name: "VitC", price: 50 };
// //  const price = order.price;
// const { price } = order;

// console.log(price);

// // const getPrice = (order) => {
// //   return order.price;
// //  }

// const getPrice = ({ price }) => {
//   return price;
// };

// console.log(getPrice(order));

// Class Workshop

// class Animal {
//   constructor(_legs) {
//     this.legs = _legs;
//   }
//   amountOfLegs() {
//     return `This animal has ${this.legs} legs.`;
//   }
// }

// const duck = new Animal(2);
// console.log(duck.amountOfLegs());

// class Dog extends Animal {
//   makeNoise() {
//     return `Bark`;
//   }
// }

// const dog = new Dog(4);
// console.log(dog.amountOfLegs());
// console.log(dog.makeNoise());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const testReduce = (input) => {
  const result = input.reduce((acc, r) => acc + r, 0);
  return result;
};

console.log(testReduce(arr));
