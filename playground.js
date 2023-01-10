/*const a = 1;
console.log("a :", a);
const b = "hello";
console.log("b :", b);
const c = true;
console.log("c :", c);
const d = 10;
console.log("d :", d);
let e = 10;
console.log("e :", e);
e = 20;
console.log("e :", e);
const myArray = [1, 2, 3];
console.log("myArray :", myArray);
const myObject = { x: 1, y: 2 };
console.log("myObject :", myObject);
const myObjects = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
console.log("myObject :", myObject);*/

/*const a = "hello";
function greet() {
  console.log(a);
}
greet();*/
// Quiz 1 Answer = "hello" can run with no error

/*const a = "hello";
function greet() {
  a = "hi";
}
console.log(a);*/
/*Quiz 2 Answer = "hello" can run with no error
or change code to be this if wannt to change a = hi
let a = "hello";
function greet() {
  a = "hi";
  console.log(a);
}
greet();*/

const a = 10;
function greet() {
  const b = 20;
}
greet();
console.log(a + b);

/* 
Quiz 3 Answer = Error due to b is in function greet() move code as below

const a = 10;
function greet() {
  const b = 20;
  console.log(a + b);
}
greet();
*/
