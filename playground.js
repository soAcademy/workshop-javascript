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
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
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
//   "The code works and the result is 'hello' because function greet() hasn't been called yet\n"
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
//   "The code is error because b is only defined and work in function greet()."
// );
// console.log("console.log() has to be inside greet() to work properly\n");

// // Function Workshop
// console.log("Function Workshop");
// // Q1
// function sum1(a, b, c) {
//   return a + b + c;
// }
// console.log(sum1(1, 2, 3));

// // Q2
// const sum2 = (a, b, c) => a + b + c;
// console.log(sum2(1, 2, 3));

// // Q3
// const sum3 = (a, b, c) => {
//   return {
//     x: a.x + b.x + c.x,
//     y: a.y + b.y + c.y,
//   };
// };
// let a = { x: 1, y: 2 };
// let b = { x: 3, y: 4 };
// let c = { x: 5, y: 6 };
// console.log(sum3(a, b, c));

// // Q4
// const isOdd = (x) => {
//   return x % 2 != 0;
// };
// const isOdd2 = (x) => x % 2 != 0;

// console.log(isOdd(153));
// console.log(isOdd2(14));

// // Flow Control Workshop
// console.log("Flow Control Workshop");
// // Q1
// const calculateBMI = (weight, height) => {
//   const BMI = (weight / (height / 100) ** 2).toFixed(2);
//   return (grade =
//     BMI < 18.5
//       ? "underweight"
//       : BMI < 25
//       ? "healthy"
//       : BMI < 30
//       ? "overweight"
//       : "obesity");
// };
// console.log(calculateBMI(60, 170));

// // Q2
// // For loop
// const average = (input) => {
//   let total = 0;
//   for (let i = 0; i < input.length; i++) {
//     total += input[i];
//   }
//   return total / input.length;
// };
// console.log(average([1, 2, 3, 4]));

// // Q3
// const sumOdd = (input) => {
//   let total = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 !== 0) {
//       total += input[i];
//     }
//   }
//   return total;
// };
// console.log(sumOdd([1, 8, 9, -3, 0, 4]));

// // Destructuring Workshop
// console.log("Destructuring Workshop");
// // Q1
// const order = { name: "VitC", price: 50 };
// const order2 = { name: "VitU", price: 100 };
// // const price = order.price;
// const { name, price } = order;
// console.log(price);

// // Q2
// const getPrice = ({ price }) => price
// console.log(getPrice(order2));

// // Class Workshop
// // Q1
// class Animal {
//   constructor(_legs) {
//     this.legs = _legs;
//   }

//   amountOfLegs() {
//     console.log(this.legs);
//   }
// }
// const kangaroo = new Animal(2);
// kangaroo.amountOfLegs();

// // Q2
// class Dog extends Animal {
//   makeNoise() {
//     console.log("Bark");
//   }
// }
// const pitBull = new Dog(4);
// pitBull.makeNoise();
// pitBull.amountOfLegs();

// HW
const products = [
  {
    id: 1,
    price: 9.99,
    cost: 7.25,
    quantity: 50,
    name: "Product 1",
  },
  {
    id: 2,
    price: 19.99,
    cost: 14.5,
    quantity: 40,
    name: "Product 2",
  },
  {
    id: 3,
    price: 29.99,
    cost: 21.35,
    quantity: 30,
    name: "Product 3",
  },
];

const orders = [
  {
    id: 1,
    customer: "John Doe",
    items: [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 2,
        quantity: 1,
      },
    ],
    datetime: "2022-12-15T12:00:00Z",
  },
  {
    id: 2,
    customer: "Jane Smith",
    items: [
      {
        productId: 3,
        quantity: 3,
      },
    ],
    datetime: "2022-12-14T12:00:00Z",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    items: [
      {
        productId: 1,
        quantity: 1,
      },
    ],
    datetime: "2022-12-13T12:00:00Z",
  },
  {
    id: 4,
    customer: "John Doe",
    items: [
      {
        productId: 2,
        quantity: 2,
      },
      {
        productId: 3,
        quantity: 1,
      },
    ],
    datetime: "2022-12-13T11:00:00Z",
  },
];

// [{productId: 1, quantity: 2, price: 400, cost: 300}
const summarizeOrder = (productsObject = products, ordersObject = orders) => {
  let ordersByProductId = [];
  for (i = 0; i < products.length; i++) {
    let { id, price, cost } = products[i];
    productId = id;
    saleQuantity = 0;
    totalSale = 0;
    totalCost = 0;
    for (j = 0; j < orders.length; j++) {
      let { items } = orders[j];
      for (k = 0; k < items.length; k++) {
        if (items[k]["productId"] === productId) {
          saleQuantity += items[k]["quantity"];
        }
      }
      totalSale = saleQuantity * price;
      totalCost = saleQuantity * cost;
    }
    products[i].quantity -= saleQuantity;
    productSale = {
      productId: id,
      saleQuantity: saleQuantity,
      totalSale: Number(totalSale.toFixed(2)),
      totalCost: Number(totalCost.toFixed(2),)
    };
    ordersByProductId.push(productSale);
  }
  return ordersByProductId;
};
// console.log(summarizeOrder());
console.table(products);

console.warn('Hello')
