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

console.log("Functions Workshop #1");

function sum1(a, b, c) {
  return a + b + c;
}

console.log(sum1(1, 2, 3));

console.log("Functions Workshop #2");

const sum2 = (a, b, c) => a + b + c;

console.log(sum2(1, 2, 3));

console.log("Functions Workshop #3");

const sum3 = (a, b, c) => {
  let sumObject = { x: 0, y: 0 };
  sumObject.x = a.x + b.x + c.x;
  sumObject.y = a.y + b.y + c.y;
  return sumObject;
};

console.log(sum3({ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }));

console.log("Functions Workshop #4");

const isOdd = (a) => (a % 2 === 0 ? false : true);

console.log(isOdd(23));
console.log(isOdd(34));
