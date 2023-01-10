const a = 1;
const b = "hello world!";
const c = true;
const d = 10;
let e = 10;
e = 20;
const myArray = [1, 2, 3];
const myObject = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

console.log(a, b, c, d, e);
console.log(myArray);
console.log(myObject);

const a1 = "hello";
function greet() {
  console.log(a1);
}
greet();

const a2 = "hello";
function great() {
  a2 = "hi";
}
console.log(a2);

const a3 = 10;
const b2 = 20;
function greet() {
  const b2 = 20;
}

greet();
console.log(a3 + b2);