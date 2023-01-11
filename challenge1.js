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

const calculateTotalSale = (orders, products) => {
  const totalSale = orders
    .map((order) => {
      const items = order.items.map((item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          ...product,
          saleValue: item.quantity * product.price,
          costValue: item.quantity * product.cost,
        };
      });
      return {
        id: order.id,
        customer: order.customer,
        items,
        datetime: order.datetime,
        saleValue: items.reduce((acc, r) => acc + r.saleValue, 0),
        // costValue: items.reduce((acc, r) => acc + r.costValue, 0),
      };
    })
    .reduce((acc, r) => acc + r.saleValue, 0);
  return totalSale;
};
// console.log(JSON.stringify(calculateTotalSale(orders, products)));
console.log(calculateTotalSale(orders, products));
