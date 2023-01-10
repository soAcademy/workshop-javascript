// console.log("Hello World");

// const a = 1;
// console.log(`1: ${a}`);

// const b = "hello";
// console.log(`2: ${b}`);

// const c = true;
// console.log(`3: ${c}`);

// const d = 10;
// console.log(`4: ${d}`);

// let e = 10;
// e = 20;
// console.log(`5: ${e}`);

// const myArray = [1, 2, 3];
// console.log(`6: ${myArray}`);

// const myObject = { x: 1, y: 2 };
// console.log(`7: ${myObject}`);

// const myObjects = [
//     { x: 1, y: 2 },
//     { x: 3, y: 4 },
// ];
// console.log(`8: ${myObjects}`);

//Scope Workshop
// const a = "hello";
// function greet() {
//     console.log(a);
// }
// greet();
// ทำงานได้ปกติ

//no.2
// let a = "hello";
// function greet() {
//     a = "hi";
// }
// greet();
// console.log(a);
// ทำงานไม่ได้ แต่ไขแล้ว

// no.3
// const a = 10;
// function greet() {
//     const b = 20;
//     console.log(a + b);
// }
// greet();
// ทำงานไม่ได้ แต่ไขแล้ว

//Functions Workshop
//1.
function sum1(a, b, c) {
    return a + b + c;
}
console.log(sum1(1, 2, 3));

//2.
const sum2 = (a, b, c) => a + b + c;
console.log(sum1(1, 2, 3));

//3.
const sum3 = (a, b, c) => {
    return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
};
console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }));

//4.
const isOdd = (val) => val % 2 !== 0;
console.log(isOdd(5));
