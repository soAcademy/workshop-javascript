/*
const a = 1;
console.log("No1 :", a);

const b = "hello";
console.log("No2 :", b);

const c = true;
console.log("No3 :", c);

const d = 10;
console.log("No4 :", d);

let e = 10;
e = 20;
console.log("No5 :", e);

const myArray = [1, 2, 3];
console.log("No6 :", myArray);

const myObject = { x: 1, y: 2 };
console.log("No7 :", myObject);

const myObjects = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
console.log("No8 :", myObjects);
//1 run ไม่ได้ ต้องเปลี่ยนตัวแปล a เป็นตัวแปรอื่นที่ยังไม่ถูก define 
console.log("Scope work shop")

const f = "Hello";
function greet(){
    console.log("1", f);
}
greet();

//2 run ไม่ได้ ต้องเปลี่ยนตัวแปล a เป็นตัวแปรอื่นที่ยังไม่ถูก define 
//แลพจะได้ค่าที่อยู่ข้างนอกคือ Hello
const B = "Hello"
function Greet(){
    B = "hi"; 
}
console.log("2", B);

//3 run ไม่ได้ ต้องมีการเรียกใช้ function

const A=10;
function GReet(){
    const C=20;
}
GReet();
console.log(A+C);

//console.log(A+C);
*/

/*
console.log("Function Workshop");
//1
function sum1(a, b, c) {
  return a + b + c;
}
console.log(sum1(1, 2, 3));

//2
const sum2 = (a, b, c) => {
  return a + b + c;
};
console.log(sum2(1, 2, 3));

//3
const sum3 = (a, b, c) => {
  return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
};

console.log(sum3({x:1,y:1},{x:2,y:2},{x:3,y:3}));

//4 function เป็นเลขคี่หรือไม่ ถ้าคี่ให้ return true
const IsOdd = (x) => (x % 2 !==0 ? true : false);
console.log(IsOdd(2));
*/

console.log("Flow Control Workshop");
//1
const calculateBMI=(weight,height)=>{
    const bmi = weight/(height/100)**2;
    let grade =" ";
    if (bmi<18.5){
        grade = "underweight";
    }
    else if (bmi<25){
        grade = "healthy";
    }
    else if (bmi<30){
        grade = "overweight";
    }else{
        grade = "obesity";
    }
    console.log("Your BMI grade is " + grade);  
}

calculateBMI(76,190);
//2
const average = (input)=>{
    let sum =0;
    let average=0;
    for(let i=0; i<input.length; i++){
        sum = sum+input[i];
        
    }
    average=sum/input.length
    console.log("The average is " + average);
}
average([1,2,3,4,]);

//3
const sumOdd = (input)=>{
    let sum = 0;
    
    for (let i=0; i<input.length; i++){
        if(input[i]%2!==0){
            sum= sum+input[i];
        }
    }
    console.log("The sum of odd is " + sum);
}
sumOdd([1,8,9,-3,0,4]);



