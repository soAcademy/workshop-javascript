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

// Following the answer and study itself
const ansChallenge4 = (orders, shippingByOrderValueTiers) =>
orders.map((order) => {
  const orderValue = order.items.reduce((acc,r) => acc + r.quantity * r.price, 0);
  const shippingTier = shippingByOrderValueTiers.find((tiers) => orderValue <= tiers.orderValueLimit);
  const totalValue = orderValue + shippingTier.shippingPrice;
  // console.log(orderValue);
  // console.log(shippingTier);
  // console.log(shippingTier.shippingPrice)
  // console.log(totalValue);
  // console.log(order)
  return{
    ...order,
    orderValue,
    shippingPrice : shippingTier.shippingPrice,
    totalValue,
  };
});

 console.log(`Answer of Challenge 4 :` ,ansChallenge4 (orders, shippingByOrderValueTiers))

