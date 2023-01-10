//console.log("Hello World");
//console.log("hallo world");
/*
let a = 1;
let b = "hallo";
let c = true;
const d = 10;
let e = 10;
e = 20;
const myArray = [1, 2, 3];
const myObject = {x: 1,y: 2};
const myObjects = [{ x: 1, y: 2 },{ x: 3, y: 4 } ];


console.log(a, b, c, d, e);
console.log(myArray);
console.log(myObject);

const a1 = "hello";
function greet () {
console.log(a1);
}
greet();

const a2 = "hello";
function greet () {
a2 = "hi";
}
console.log(a2);

const a3 = 10;
function greet() {
const b3 = 20;

}
greet();
console.log(a + b);
/** */
/** 
function sum1(a, b, c) {
    let result = a + b +c ;
    console.log(a, b, c);
    return result;
    }
    console.log(sum1(1,2,3));


    
    
    const sum2 = (a, b, c) => {
         const result = a + b +c ;
         return result
        //return a + b + c;

        }
        console.log(sum2(4,5,6));



        const sum3 = (a, b, c) => {
        const result = a.x + b.x + c.x, y: a.y + b.y + c.y ;
    return result ;
    } 
    console.log(({x: 1,y: 1},{x: 2,y: 2}));



const isOdd = (num) => {
    return num % 2 !== 0;

    };


const calculateBMI = (weight, height) => {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    let score ;
    if (bmi < 18.5) {
    grade = 'underweight';
    } else  
    if (bmi < 25) {
    grade = 'healthy';
    } else 
    if (bmi < 30) {
    grade = 'overweight';
    } else {
    grade = 'obesity';
    }
    console.log(`Your BMI grade is: ${score}`);
    }; 
    console.log(calculateBMI(70, 175));


    const average = (input) => {

        let sum = 0;
    
        for (let i = 0; i < input.length; i++) {
        sum += input[i];
        }
        return sum / input.length;
        }; // average([1, 2, 3, 4]) => 2.5  


        const sumOdd = (input) => {

            let sum = 0;
            for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 !== 0) {
            sum = sum + input[i];
            }
            }
            return sum; };

            console.log(sumOdd([1, 8, 9, -3, 0, 4]));
            //** */
            //const order = { name: 'VitC', price: 50 };
            //const price = order.price;
            //const { price } = order;
            
            const order = { name: 'VitC', price: 50, };
            const { price,} = order;
            console.log(price); 
            



            //const getPrice = (order) => {
            //    return order.price;
            //    }

            const getPrice = (order) => {
                const { price } = order;
                return price;
            }
            const order3 = { name: 'VitC', price: 70 };
            console.log(getPrice(order3)); 
            

            