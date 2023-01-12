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

const summarizeOrder = (shippingByOrderValueTiers, orders) => {
  let result = {};
  orders.map((e) => {
    let orderValue = 0;
    e.items.map((i) => {
      let value = i.quantity * i.price;
      // let shippingPrice = shippingByOrderValueTiers.find(
      //   (t) => t.orderValueLimit >= result[e.customer]?.orderValue ?? value
      // )
      let shippingPrice = shippingByOrderValueTiers.find(
        (t) => t.orderValueLimit >= result[e.customer]?.orderValue ?? value
      )?.shippingPrice;
      result[e.customer] = {
        ...e,
        orderValue: (result[e.customer]?.orderValue ?? 0) + value,
        shippingPrice: shippingPrice,
        totalValue:
          (result[e.customer]?.orderValue ?? 0) +
          (result[e.customer]?.shippingPrice ?? 0) +
          value +
          shippingPrice,
      };
      return result;
    });
  });
  console.log(result);
};
summarizeOrder(shippingByOrderValueTiers, orders);
