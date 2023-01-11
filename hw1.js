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
  {
    id: 5,
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
// [
//   { productId: 1, quantity: 2, price: 400, cost: 300 },
//   { productId: 2, quantity: 3, price: 100, cost: 30 },
// ];
// const summarizeOrder = (orders, products) => {
//   let result = [];
//   let productsMap = {}
//   products.forEach((product)=> {
//     productsMap[product.id] = {price: product.price, cost: product.cost}
//   })
//   orders.forEach((order) => {
//     order.items.forEach((item) => {
//       let sales = 0;
//       let costs = 0;
//       let price = productsMap[item.productId].price
//       let cost = productsMap[item.productId].cost
//       sales += item.quantity * price;
//       costs += item.quantity * cost;
//       targetExist = result.find((p) => p.productId === item.productId)
//       if (targetExist) {
//         let target = result.find((p) => p.productId === item.productId);
//         target = {
//           productId: target.productId,
//           totalSalesQuantity: (target.totalSalesQuantity += item.quantity),
//           totalSalesPrice: (target.totalSalesPrice += sales),
//           totalCosts: (target.totalCosts += costs),
//         };
//       } else {
//         result.push({
//           productId: item.productId,
//           totalSalesQuantity: item.quantity,
//           totalSalesPrice: sales,
//           totalCosts: costs,
//         });
//       }
//     });
//   });
//   result.forEach((e) => {
//     products.find((p)=> p.id === e.productId).quantity -= e.totalSalesQuantity;
//   })
//   return result;
// };
// console.log(summarizeOrder(orders, products));
// console.log(products);

// const summarizeOrder = (orders, products) => {
//   let result = [];
//   let productsMap = {};
//   let ordersItems = [];
//   products.forEach((product) => {
//     productsMap[product.id] = { price: product.price, cost: product.cost };
//   });
//   orders.forEach((order) => ordersItems.push(order.items));
//   ordersItems.flat().forEach((item) => {
//     let sales = 0;
//     let costs = 0;
//     let price = productsMap[item.productId].price;
//     let cost = productsMap[item.productId].cost;
//     sales += item.quantity * price;
//     costs += item.quantity * cost;
//     targetExist = result.find((p) => p.productId === item.productId);
//     if (targetExist) {
//       targetExist = {
//         productId: targetExist.productId,
//         totalSalesQuantity: (targetExist.totalSalesQuantity += item.quantity),
//         totalSalesPrice: (targetExist.totalSalesPrice += sales),
//         totalCosts: (targetExist.totalCosts += costs),
//       };
//     } else {
//       result.push({
//         productId: item.productId,
//         totalSalesQuantity: item.quantity,
//         totalSalesPrice: sales,
//         totalCosts: costs,
//       });
//     }
//   });
//   result.forEach((e) => {
//     products.find((p) => p.id === e.productId).quantity -= e.totalSalesQuantity;
//   });
//   return result;
// };
// console.log(summarizeOrder(orders, products));
// console.log(products);

const summarizeOrder = (orders, products) => {
  let result = {};
  let productsMap = {};
  let ordersItems = [];
  products.forEach((product) => {
    productsMap[product.id] = {
      id: product.id,
      price: product.price,
      cost: product.cost,
      quantity: product.quantity,
      name: product.name,
    };
  });
  orders.forEach((order) => ordersItems.push(order.items));
  ordersItems.flat().forEach((item) => {
    let sales = 0;
    let costs = 0;
    let price = productsMap[item.productId].price;
    let cost = productsMap[item.productId].cost;
    sales += item.quantity * price;
    costs += item.quantity * cost;
    if (result[item.productId]) {
      result[item.productId] = {
        productId: result[item.productId].productId,
        totalSalesQuantity: (result[item.productId].totalSalesQuantity +=
          item.quantity),
        totalSalesPrice: (result[item.productId].totalSalesPrice += sales),
        totalCosts: (result[item.productId].totalCosts += costs),
      };
    } else {
      result[item.productId] = {
        productId: item.productId,
        totalSalesQuantity: item.quantity,
        totalSalesPrice: sales,
        totalCosts: costs,
      };
    }
  });
  result = Object.values(result);
  result.forEach((e) => {
    productsMap[e.productId].quantity -= e.totalSalesQuantity;
  });
  products.forEach((product) => {
    product.quantity = productsMap[product.id].quantity;
  });
  return result;
};
console.log(summarizeOrder(orders, products));
console.log(products);
