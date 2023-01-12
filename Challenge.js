let products = [
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

let orders = [
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

// Total Revenue:
const orderId1 = orders[0].items.map((r) => {
  const product = products.filter((p) => p.id === r.productId)[0];
  return {
    price: product.price * r.quantity,
  };
});
let resultId1 = orderId1.reduce((acc, r) => acc + r.price, 0);

const orderId2 = orders[1].items.map((r) => {
  const product = products.filter((p) => p.id === r.productId)[0];
  return {
    price: product.price * r.quantity,
  };
});
let resultId2 = orderId2.reduce((acc, r) => acc + r.price, 0);

const orderId3 = orders[2].items.map((r) => {
  const product = products.filter((p) => p.id === r.productId)[0];
  return {
    price: product.price * r.quantity,
  };
});
let resultId3 = orderId3.reduce((acc, r) => acc + r.price, 0);

const orderId4 = orders[3].items.map((r) => {
  const product = products.filter((p) => p.id === r.productId)[0];
  return {
    price: product.price * r.quantity,
  };
});
let resultId4 = orderId4.reduce((acc, r) => acc + r.price, 0);

let revenue = resultId1 + resultId2 + resultId3 + resultId4;
console.log(`Total revenue: ${revenue}`);

// Top Selling Product
