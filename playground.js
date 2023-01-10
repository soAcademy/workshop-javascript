// console.log("Hello World");

// const a = 1;
// console.log(`1: ${a}`);

// const b = "hello";
// console.log(`2: ${b}`);

// const c = true;
// console.log(`3: ${c}`);

// const d = 10;
// console.log(`4: ${d}`);

// let e = 10;
// e = 20;
// console.log(`5: ${e}`);

// const myArray = [1, 2, 3];
// console.log(`6: ${myArray}`);

// const myObject = { x: 1, y: 2 };
// console.log(`7: ${myObject}`);

// const myObjects = [
//     { x: 1, y: 2 },
//     { x: 3, y: 4 },
// ];
// console.log(`8: ${myObjects}`);

//Scope Workshop
// const a = "hello";
// function greet() {
//     console.log(a);
// }
// greet();
// ทำงานได้ปกติ

//no.2
// let a = "hello";
// function greet() {
//     a = "hi";
// }
// greet();
// console.log(a);
// ทำงานไม่ได้ แต่ไขแล้ว

// no.3
// const a = 10;
// function greet() {
//     const b = 20;
//     console.log(a + b);
// }
// greet();
// ทำงานไม่ได้ แต่ไขแล้ว

// //Functions Workshop
// //1.
// function sum1(a, b, c) {
//     return a + b + c;
// }
// console.log(sum1(1, 2, 3));

// //2.
// const sum2 = (a, b, c) => a + b + c;
// console.log(sum1(1, 2, 3));

// //3.
// const sum3 = (a, b, c) => {
//     //a = {x: number, y: number}

//     const ax = a.x;
//     const ay = a.y;

//     const bx = b.x;
//     const by = b.y;

//     const cx = c.x;
//     const cy = c.y;

//     const x = ax + bx + cx;
//     const y = ay + by + cy;

//     return { x: x, y: y };
// };
// console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// //4.
// const isOdd = (val) => val % 2 !== 0;
// console.log(isOdd(5));

// //FLOW CONTROL WORKSHOP
// //1.
// const calculateBMI = (weight, height) => {
//   const bmi = weight / (height / 100) ** 2;
//   let result = "";
//   // console.log(bmi);
//   if (bmi >= 30) {
//     result = "obesity";
//   } else if (bmi >= 25) {
//     result = "overweight";
//   } else if (bmi >= 18.5) {
//     result = "healthy";
//   } else {
//     result = "underweight";
//   }
//   return result;
// };

// console.log(calculateBMI(62, 175));

// //2.
// const average = (input) => {
//   let resultAvg = 0;
//   let sumIn = 0;
//   for (let i = 0; i < input.length; i++) {
//     sumIn += input[i];
//   }
//   // console.log(sumIn);
//   resultAvg = sumIn / input.length;
//   return resultAvg;
// };

// console.log(average([1, 2, 3, 4]));

// //3.
// const sumOdd = (input) => {
//   let sumValue = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       // console.log(input[i]);
//       sumValue += input[i];
//     }
//   }
//   return sumValue;
// };

// console.log(sumOdd([1, 8, 9, -3, 0, 4]));

// // DESTRUCTURING WORKSHOP
// // 1.
// const order = { name: "VitC", price: 50 };
// const { price } = order;
// console.log(price);

// //2.
// const getPrice = ({ price }) => {
//   return price;
// };
// console.log(getPrice({ price }));

//CLASS WORKSHOP
//1.
class Animal {
  constructor(_legs) {
    this.legs = _legs;
  }

  amountOfLegs() {
    console.log(`amountOfLegs: ${this.legs}`);
  }
}

const animal = new Animal(4);
animal.amountOfLegs();

//2.
class Dog extends Animal {
  makeNoise() {
    console.log("makeNoise: Bark");
  }
}

const dog = new Dog(4);
dog.amountOfLegs();
dog.makeNoise();
