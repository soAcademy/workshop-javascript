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

function sum1(a, b, c) {
  return a + b + c;
}
console.log(sum1(1, 2, 3));

const sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 3));

const sum3 = (a, b, c) => ({ x: a.x + b.x + c.x, y: a.y + b.y + c.y });
console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

const isOdd = (num) => num %2 !== 0;
console.log(isOdd(9));
