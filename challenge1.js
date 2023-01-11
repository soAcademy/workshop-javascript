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

// Quiz: 1

const ordersItems = orders.map((order) => order.items).flat();

// console.log(ordersItems);

const ordersItemsCombined = Object.values(
  ordersItems.reduce((acc, item) => {
    acc[item.productId] = {
      productId: item.productId,
      quantity: (acc[item.productId]?.quantity ?? 0) + item.quantity,
    };
    return acc;
  }, {})
);

// console.log(ordersItemsCombined);

const calculateTotalSale = ordersItemsCombined.reduce((acc, item) => {
  const matchedProduct = products.find(
    (product) => product.id === item.productId
  );
  acc += item.quantity * matchedProduct.price;
  return acc;
}, 0);

console.log(
  "Quiz #1\nTotal sales is " + calculateTotalSale.toFixed(2) + " Baht\n"
);

// Quiz: 2
const findTopValueCustomer = () => {};
console.log;
