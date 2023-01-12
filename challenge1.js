const productList = [
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

const orderList = [
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

// 1. calculateTotalSale --> number

// const calculateTotalSale = (orderList, productList) => {
//   const totalSale = orderList
//     .map((order) => {
//       const items = order.items.map((item) => {
//         const product = productList.find(
//           (product) => product.id === item.productId
//         );
//         // console.log(product);
//         // console.log(item);
//         return {
//           ...item,
//           ...product,
//           saleValue: item.quantity * product.price,
//           costValue: item.quantity * product.cost,
//         };
//       });
//       // console.log(items);
//       return {
//         id: order.id,
//         customer: order.customer,
//         items: items,
//         saleValue: items.reduce((acc, r) => acc + r.saleValue, 0),
//       };
//     })
//     .reduce((acc, r) => acc + r.saleValue, 0);
//   // console.log(totalSale);
//   return totalSale;
// };

// console.log(
//   "Total sale = ",
//   calculateTotalSale(orderList, productList) + " USD"
// );

// 2. topSellingProduct -> {id: Number, name: String, saleValue: Number, costValue: Number, profit: Number, saleQuantity: Number, remainQuantity: Number}[]

// const topSellingProduct = (orderList, productList) => {
//   const itemCount = orderList.map((order) => order.itemCount).flat(); // .flat = การนำ Array ที่อยู่ใน Array มารวมกัน
// };

// console.log(topSellingProduct(orderList, productList));

