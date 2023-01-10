console.log("Hello World");

console.log("Variables Workshop");

const a = 1;
const b = "hello";
const c = true;
const d = 10;
let e = 10;
e = 20;
const myArray = [1, 2, 3];
const myObject = { x: 1, y: 2 };
const myObjects = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + e);
console.log("myArray = " + myObjects);
console.log("myObject = " + myObject);
console.log("myObjects = " + myObjects);

console.log("Scope Workshop #1");

const aa = "hello";

function greet() {
  console.log(aa);
}

greet();

console.log("Scope Workshop #2");

const aaa = "hello";

function greet1() {
  aaa = "hi";
}

console.log(aaa);

console.log("Scope Workshop #3");

const aaaa = 10;
const bbbb = 20; // fixed

function greet2() {
  const bbbb = 20;
}

greet2();
console.log(aaaa + bbbb);
