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

const calculateOrderValue = (shippingByOrderValueTiers, orders) =>
  orders.map((order) => {
    const totalOrder = order.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    // console.log(orderValue);
    const shippingTier = shippingByOrderValueTiers.find(
      (shipCost) => totalOrder <= shipCost.orderValueLimit
    );
    // console.log(shippingTier);
    return {
      ...order,
      orderValue: totalOrder,
      shippingPrice: shippingTier.shippingPrice,
      totalValue: totalOrder + shippingTier.shippingPrice,
    };
  });

console.log(calculateOrderValue(shippingByOrderValueTiers, orders));

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

// console.log("Q1: ", calculateOrderValue(orders, shippingByOrderValueTiers));

// OpenAI

// const orderValuesWithShipping = orders.map(order => {
//   // Use reduce to calculate the total value of the items in the order
//   const orderValue = order.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);

//   // Use find to determine the shipping tier for the order
//   const shippingTier = shippingByOrderValueTiers.find(tier => orderValue <= tier.orderValueLimit);

//   // Concatenate the orderValue and shippingPrice in the order object
//   return { ...order, orderValue, shippingPrice: shippingTier.shippingPrice };
// });

// console.log(orderValuesWithShipping);
