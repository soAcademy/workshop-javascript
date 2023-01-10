// const a ="hello";
// function greet(){
//     console.log(a);
// }
// greet();

// let a = "hello world"
// function greet(){
//     a = "hi"
//     console.log(a);
// }
// greet();

// let a = 10;
// function greet() {
//     const b = 20;
//     console.log(a+b);

// }
// greet();

// function sum1(a, b, c) {
//   let total = a + b + c;
//   console.log(total);
// }
// sum1(1, 2, 3);

// const sum2 = (a, b, c) => {
//     const total = a + b + c;
//     console.log(total);
// }
// sum2(1, 2, 3);

// const sum3 = (a, b, c, d) => {
//     const total = (a.x+b.x+c.x);
//     return;
// }
// sum3({x:1},{});

// const sum (a, b, c) => {
//     const sum1 =  (a.x+b.x+c.x) + (a.y+b.y+c.y);
//  const total = (a.x+b.x+c.x) + (a.y+b.y+c.y);
//  return;
//  }
// sum({x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3});

// const isOdd = (num) => {
//     return num % 2 !== 0;
// }
// console.log(isOdd(8));

// const calculateBMI = (weight, height) => {
//     let calculateBMI
//     let BMI = 0;
//     BMI = weight/(height/100)**2;
//     if(BMI < 18.5){
//         console.log("underweight");
//         } else if(BMI < 25 && BMI >= 18.5) {
//         console.log("healthy");
//      } else if(BMI < 30 && BMI >= 25) {
//         console.log("overweight");
//         } else if(BMI >= 30) {
//             console.log("obesity");
//         }
//     console.log(BMI);
//     return calculateBMI;
// }
// calculateBMI(61,170);

// const average = (inputs) => {
//   let sum = 0;
//   let average = 0;
//   for (let i = 0; i < inputs.length; i++) {
//     sum += inputs[i];
//   }
//   average = sum / inputs.length;
//   return average;
// };
// console.log(`The average is: ${average([1, 2, 3, 4])}`);

// const sumOdd = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) sum += input[i];
//   }
//   return sumOdd;
// }
// console.log(`The sum of odd is: ${sumOdd([1, 8, 9, -3, 0, 4])}`);

// const order = { name: "VitC", price: 50 };
// // const { price } = order;

// // console.log(`The price is: ${price}`);

// const getprice = ({ price }) => {
//   return price;
// };

// console.log(`The price is: ${getprice({ price: 50 })}`);

class Animal {
  constructor(_legs) {
    this.legs = _legs;
  }
  amountOfLegs() {
    console.log(`I have ${this.legs} legs`);
  }
}
const animal = new Animal(2);
animal.amountOfLegs();
