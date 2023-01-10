/* console.log("Hello World");
const a = 1;
const b = "hello";
const c = true;
const d = 10;
let e = 10;
e = 20;
const myArray = [1, 2, 3];
const myObject = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
]; */

/* console.log(a, b, c, d, e);
console.log(myArray);
console.log(myObject); */


/* const a1 = "hello";
function greet() {
  console.log(a1);
}
greet();

let a2 = "hello";
function greet2() {
  a2 = "hi";
}
console.log(a2);

const a = 10;
function greet3() {
  const b = 20;
  console.log(a + b);
}
greet3(); */

/* function sum1(a,b,c) {
    const d = (a+b+c);
    return d;
}
console.log(sum1(1,2,3)) */

/* const sum2 = (a, b, c) =>{
  const d = a + b + c;
  return d;
}
console.log(sum2(1, 2, 3)); */

/* const sum3 = (a, b, c) => {
  return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
};
console.log(sum3({ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 })); */
/* 
const isOdd = (x) => {
    return x % 2 !== 0;
}
console.log(isOdd(2)) */


/* const calculateBMI = (weight, height) => {
    const bmi = weight / (height / 100) ** 2;
    let grade ;
    if(bmi < 18.5) {
        grade = "underweight";
    } else if (18.5 <= bmi < 25) {
        grade = "healthy";
    } else if (25 <= bmi < 30) {
        grade = "overweight"
    } else if (bmi >= 30) {
        grade = "obesity"
    }
    return (`Your BMI grade is: ${grade}`);
};
console.log(calculateBMI(78, 180));
 */
/* const average = (input) => {
    let sum = 0;
let average = 0;
for (let i = 0; i < input.length; i++) {
sum += input[i];
}
average = sum / input.length;
return (`The average is: ${average}`);
}
console.log (average([1,2,3,4]));
 */


/* const sumOdd = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) 
    sum += input[i];
  }
  return sum;
};
console.log(`The sum of odd  is: ${sumOdd([1, 2, 3, 4])}`);
 */

/* const order = { name: "VitC", price: 50 };
const {price} = order;
console.log(price) */

const order = { name: "VitC", price: 50 };
const getPrice = ({price}) => {
  return price;
};
console.log(getPrice(order))









