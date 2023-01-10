console.log("Hello World");

// console.log("Variables Workshop");

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

// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c = " + c);
// console.log("d = " + d);
// console.log("e = " + e);
// console.log("myArray = " + myObjects);
// console.log("myObject = " + myObject);
// console.log("myObjects = " + myObjects);

// console.log("Scope Workshop #1");

// const aa = "hello";

// function greet() {
//   console.log(aa);
// }

// greet();

// console.log("Scope Workshop #2");

// let aaa = "hello"; // fixed

// function greet1() {
//   aaa = "hi";
// }

// console.log(aaa);

// console.log("Scope Workshop #3");

// const aaaa = 10;

// function greet2() {
//   const bbbb = 20;
//   console.log(aaaa + bbbb); // fixed
// }

// greet2();

// console.log("Functions Workshop #1");

// function sum1(a, b, c) {
//   return a + b + c;
// }

// console.log(sum1(1, 2, 3));

// console.log("Functions Workshop #2");

// const sum2 = (a, b, c) => a + b + c;

// console.log(sum2(1, 2, 3));

// console.log("Functions Workshop #3");

// const sum3 = (a, b, c) => {
//   let sumObject = { x: 0, y: 0 };
//   sumObject.x = a.x + b.x + c.x;
//   sumObject.y = a.y + b.y + c.y;
//   return sumObject;
// };

// console.log(sum3({ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }));

// console.log("Functions Workshop #4");

// const isOdd = (a) => (a % 2 === 0 ? false : true);

// console.log(isOdd(23));
// console.log(isOdd(34));

// console.log("Flow Control Workshop #1");

// const calculateBMI = (weight, height) => {
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
// };

// console.log(
//   "A person who weighs 70 kg and is 170 cm tall is considered " +
//     calculateBMI(70, 170) +
//     ", according to BMI"
// );
// console.log(
//   "A person who weighs 80 kg and is 170 cm tall is considered " +
//     calculateBMI(80, 170) +
//     ", according to BMI"
// );

// console.log("Flow Control Workshop #2");

// const average = (inputArray) => {
//   let accumulatedResult = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     accumulatedResult += inputArray[i];
//   }
//   return accumulatedResult / inputArray.length;
// };

// console.log(average([1, 2, 3, 4]));

// console.log("Flow Control Workshop #3");

// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       sum += input[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOdd([1, 8, 9, -3, 0, 4]));

// console.log("Destructuring Workshop #1");

// const order = { name: "VitC", price: 50 };
// const { price } = order;

// console.log(price);

// console.log("Destructuring Workshop #2");

// const getPrice = ({ price }) => price;

// console.log(getPrice(order));

console.log("Class Workshop #1");

class Animal {
  constructor(_legs) {
    this.legs = _legs;
  }

  amountOfLegs() {
    console.log(this.legs);
  }
}

kitty = new Animal(4);

kitty.amountOfLegs();

console.log("Class Workshop #2");

class Dog extends Animal {
  makeNoise() {
    console.log("Bark");
  }
}

scoobyDoo = new Dog(4);

scoobyDoo.amountOfLegs();
scoobyDoo.makeNoise();
