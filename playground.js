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
let a = "hello";
function greet(){
    a = "hi";
}
greet()
console.log(a);

// สามารถรันได้ แต่ไม่ใช่กับรับค่าจากฟังชั้น output = hello
// ถ้าต้องการให้ outputออกมาเป็น a=hi  ต้องแก้ const เป็น let และเรียกใช้ฟังก์ชั้นก่อน console.log(a);