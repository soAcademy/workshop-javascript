const itemPrice = [
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

const customers = [
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

//สิ่งที่อยากได้คือ ordersByProductId หน้าตาประมาณนี้
//[{productId: 1, quantity: 2, price: 400, cost: 300}, {productId: 2, quantity: 3, price: 100, cost: 30}]

//Challenge 1
const totalSales = (input) => {
  const totalPrice = input.reduce((acc, order) => {
    acc = acc + order.price * order.quantity;

    return acc;
  }, 0);

  console.log(`Total sale is ${totalPrice.toFixed(2)}`);
};
totalSales(itemPrice);
console.log("--------------------------------------------------------");

//Challenge 2 find top selling product
const topSellingProduct = (input) => {
  const topSellingProduct = input.map((r) => r.price);
  const quantity = input.map((q) => q.quantity);
  let totalPrice = [];
  let saleList = [];
  for (let i = 0; i < input.length; i++) {
    let totalPrice = topSellingProduct[i] * quantity[i];
    console.log(`id ${i + 1} totalsale = ${totalPrice.toFixed(2)}`);
    saleList.push(totalPrice.toFixed(2));

  }
  console.log(saleList);
  //const findIndex = findIndex(Max);
  const maxNumber = saleList.reduce((a, b) => Math.max(a, b), -Infinity);
  //const maxNumber = Math.max(...saleList);         //? ถ้าไม่ใส่ ... จะขึ้น NAN
  let index = saleList.indexOf(maxNumber,0);
  console.log(`Top sell product is id : ${index}, ${maxNumber}`);  //ได้ค่า index = -1 value is not found
};
topSellingProduct(itemPrice);                 //?อยากเปลี่ยนไปเขียนแบบ map จะทำได้ไหม
                                              // ?ขอตัวอย่างการใช้ reduce เพิ่มในกรณีที่มีตัวแปรรับค่ามากกว่า 2 ตัว และ condition ซับซ้อน

console.log("--------------------------------");
/*
const a = itemPrice[0].price*itemPrice[0].quantity.toFixed(2);
const b = itemPrice[1].price*itemPrice[1].quantity.toFixed(2);
const c = itemPrice[2].price*itemPrice[2].quantity.toFixed(2);
console.log(a+b+c);
*/
/*
a = [1, 23, 2];
console.log(a.indexOf(23));
console.log(itemPrice[0]);
//To get key and value
console.log(Object.keys(itemPrice[0]));
console.log(Object.values(itemPrice[0]));
console.log(Object.assign(1, ['a','b','c'])); // {0:"a", 1:"b", 2:"c"}
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
//challenge3 เช็คว่าสินค้าแต่ละรายการคงเหลือเท่าไร
*/
c =Math.max(['499.50', '799.60', '899.70' ]);
console.log(c);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let indexx = fruits.indexOf("Apple");

const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);   //ใช้ reduce หา max min ได้
console.log(max);