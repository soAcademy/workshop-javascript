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

const findOrderValues = (orders, shippingByOrderValueTiers) => {
  const orderDetails = orders.map((order) => {
    const orderValues = order.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    const orderShippingPrice = shippingByOrderValueTiers.find(
      (shippingTier) => orderValues <= shippingTier.orderValueLimit
    );
    // console.log(orderShippingPrice);
    const totalValues = orderShippingPrice.shippingPrice + orderValues;
    return {
      customer: order.customer,
      items: order.items,
      orderValues,
      shippingPrice: orderShippingPrice.shippingPrice,
      totalValues,
    };
  });
  return orderDetails;
};
console.log(JSON.stringify(findOrderValues(orders, shippingByOrderValueTiers)));
// findOrderValues(orders,shippingByOrderValueTiers)
