// // Variables Workshop
// console.log("Variables Workshop");
// // Q1
// const a = 1;
// console.log("Q1: ", a);
// // Q2
// const b = "hello";
// console.log("Q2: ", b);
// // Q3
// const c = true;
// console.log("Q3: ", c);
// // Q4
// const d = 10;
// console.log("Q4: ", d);
// // Q5
// let e = 10;
// console.log("Q5.1 : ", e);
// e = 20;
// console.log("Q5.2 : ", e);
// // Q6
// const myArray = [1, 2, 3];
// console.log("Q6: ", myArray);
// // Q7
// const myObject = { x: 1, y: 2 };
// console.log("Q7: ", myObject);
// // Q8
// const myObjects = [
// 	{ x: 1, y: 2 },
// 	{ x: 3, y: 4 },
// ];
// console.log("Q8: ", myObjects);

// // Scope Workshop
// console.log("Scope Workshop");
// // Q1
// console.log("Q1");
// console.log(`const a = "hello";
// function greet () {
//     console.log(a);
// }
// greet();`);
// console.log('The code works and the result is "hello"\n');

// // Q2
// console.log("Q2");
// console.log(`const a = "hello";
// function greet() {
// 	a = "hi";
// 	console.log(a);
// }
// console.log(a);`);
// console.log(
// 	"The code works and the result is 'hello' because function greet() hasn't been called yet\n"
// );

// //Q3
// console.log("Q3");
// console.log(`const a = 10;
// function greet() {
// 	const b = 20;
// }
// greet();
// console.log(a + b);`);
// console.log(
// 	"The code is error because b is only defined and work in function greet()."
// );
// console.log("console.log() has to be inside greet() to work properly\n");

// Function Workshop
console.log("Function Workshop");
// Q1
function sum1(a, b, c) {
	return a + b + c;
}
console.log(sum1(1, 2, 3));

// Q2
const sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 3));

// Q3
const sum3 = (a, b, c) => {
	return {
		x: a.x + b.x + c.x,
		y: a.y + b.y + c.y,
	};
};
let a = { x: 1, y: 2 };
let b = { x: 3, y: 4 };
let c = { x: 5, y: 6 };
console.log(sum3(a, b, c));

// Q4
const isOdd = (x) => {
	return x % 2 != 0;
};
const isOdd2 = (x) => x % 2 != 0

console.log(isOdd(153));
console.log(isOdd2(3));
