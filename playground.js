//console.log("Hello World");
//1
//const a = 1;
//2
//const b = "Hello";
//3
//const c = true;
//4
//const d = 10;
//5
//let e = 10;
//e = 20;
//6
//const myArray = [1, 2, 3];
//7
//const myObject = { x: 1, y: 2 };
//8
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

//Scope Workshop
const a = 10;
function greet(){
    const b = 20;
    console.log(a+b);
}
greet()


// สามารถรันได้ console.log เข้าไปเรียน b ออกมาไม่ได้
// ต้องย้าย console.log ไว้ใน function