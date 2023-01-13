const shippingByOrderValueTiers = [
  {
    name: "Tier 1",
    orderValueLimit: 100,
    shippingPrice: 30,
  },
  {
    name: "Tier 2",
    orderValueLimit: 500,
    shippingPrice: 25,
  },
  {
    name: "Tier 3",
    orderValueLimit: 1000,
    shippingPrice: 20,
  },
  {
    name: "Tier 4",
    orderValueLimit: 99999999,
    shippingPrice: 0,
  },
];

const orders = [
  {
    customer: "Bin",
    items: [
      {
        product: "Item 1",
        quantity: 1,
        price: 30,
      },
      {
        product: "Item 2",
        quantity: 2,
        price: 20,
      },
    ],
  },
  {
    customer: "Ploy",
    items: [
      {
        product: "Item 1",
        quantity: 20,
        price: 30,
      },
      {
        product: "Item 2",
        quantity: 5,
        price: 20,
      },
    ],
  },
  {
    customer: "Jam",
    items: [
      {
        product: "Item 1",
        quantity: 10,
        price: 30,
      },
      {
        product: "Item 2",
        quantity: 1,
        price: 20,
      },
    ],
  },
  {
    customer: "John",
    items: [
      {
        product: "Item 1",
        quantity: 100,
        price: 30,
      },
      {
        product: "Item 2",
        quantity: 100,
        price: 20,
      },
    ],
  },
];

// Quiz 1: Find order value including shipping price for each order
// 1. use .map loop through all orders
// 2. use .reduce inside .map to calculate order value
// 3. use .find inside .map to find shippingTier
// 4. concat orderValue and shippingPrice in order

// [
//   {
//     customer: 'Bin',
//     items: [
//       {
//         product: 'Item 1',
//         quantity: 1,
//         price: 30
//       },
//       {
//         product: 'Item 2',
//         quantity: 2,
//         price: 20
//       }
//     ],
//     orderValue: 70,
//     shippingPrice: 30,
//     totalValue: 100
//   },
//   ...
// ]

// const calculateOrderValue = (orders, shippingByOrderValueTiers) =>
//   orders.map((order) => {
//     const orderValue = order.items.reduce(
//       (acc, r) => acc + r.quantity * r.price,
//       0
//     );
//     const shippingTier = shippingByOrderValueTiers.find(
//       (shipping) => orderValue <= shipping.orderValueLimit
//     );
//     const totalValue = orderValue + shippingTier.shippingPrice;

//     return {
//       ...order,
//       orderValue,
//       shippingPrice: shippingTier.shippingPrice,
//       totalValue,
//     };
//   });

// console.log(calculateOrderValue(orders, shippingByOrderValueTiers));

//  console.log(
//   JSON.stringify(calculateOrderValue(orders, shippingByOrderValueTiers), null, 4)
//   );

const findValue = (inputOrder, InputShipping) =>
  inputOrder.map((data) => {
    const orderValue = data.items.reduce(
      (acc, r) => acc + r.quantity * r.price,
      0
    );

    //Find teir
    const findTier = InputShipping.find(
      (shipping) => orderValue <= shipping.orderValueLimit
    );
    //sum all
    const finalPrice = findTier.shippingPrice + orderValue;
    // console.log(finalPrice);
    return {
      customer: data.customer,
      items: data.items,
      orderValue,
      shippingPrice: findTier.shippingPrice,
      finalPrice,
      //ปกติถ้าอยากได้ value (ระบุ idx ของ key เ่ช่น orders[0].customer แต่ถ้าใช้วิธี map ระบุแค่ key จะได้หมดเลย)
    };
  });

console.log(
  JSON.stringify(findValue(orders, shippingByOrderValueTiers), null, 1)
);
// console.log("--------------------------------------------------------");

// const multiply = (input)=>{
//   const output = input*20;
//   return output +10;
// }
// console.log(multiply(20));
// console.log(shippingByOrderValueTiers[0].shippingPrice);
