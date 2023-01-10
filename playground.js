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
function sum1(a, b, c) {
  return a + b + c;
}
console.log(sum1(1, 2, 3));

// Quiz 2
const sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 1));

// Quiz 3
const sum3 = (a, b, c) => ({ x: a.x + b.x + c.x, y: a.y + b.y + c.y });
console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

// Quiz 4
const isOdd = (x) => x % 2 !== 0;
console.log(isOdd(13));
