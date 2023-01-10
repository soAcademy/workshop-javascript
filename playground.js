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

const sum2 = (a, b, c) => {
  return a + b + c;
};

console.log(sum2(1, 2, 3));
