let a = 1;
let b = "hello";
let c = true;
const d = 10;
let e = 10;
e = 20;
const myArray = [1, 2, 3];
const myObject = { x: 1, y: 2 };
const myObjects = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

console.log(a, b, c, d, e);
console.log(myArray);
console.log(myObjects);

//Scope Workshop

const f = "hello";
function greet() {
  console.log(f);
}
greet();

let h = "hello";
function greet1() {
  h = "hi";
  console.log(h);
}
greet1();

const i = 10;
function great() {
  const j = 20;
  console.log(i + j);
}

great();
