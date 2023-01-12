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

// calculate total sale
const calTotalSale = (orders, products) => {
  let total = 0;
  orders.map((order) =>
    order.items.map(
      (item) =>
        (total +=
          item.quantity * products.find((e) => e.id === item.productId).price)
    )
  );
  return total;
};
console.log(calTotalSale(orders, products));

// Find Best Seller Product
const topSellingProduct = (orders, products) => {
  let result = [];
  orders.map((order) => {
    order.items.map((item) => {
      let value =
        products.find((e) => e.id === item.productId).price * item.quantity;
      let cost =
        products.find((e) => e.id === item.productId).cost * item.quantity;
      target = result.findIndex((e) => e.id === item.productId);
      const x =
        target !== -1
          ? (result[target] = {
              id: result[target].id,
              saleValue: (result[target].saleValue += value),
              costValue: (result[target].costValue += cost),
              profit: result[target].saleValue - result[target].costValue,
              saleQuantity: result[target].saleQuantity + item.quantity,
              remainQuantity: result[target].remainQuantity - item.quantity,
            })
          : result.push({
              id: item.productId,
              saleValue: value,
              costValue: cost,
              profit: value - cost,
              saleQuantity: item.quantity,
              remainQuantity:
                products.find((e) => e.id === item.productId).quantity -
                item.quantity,
            });
    });
  });
  let sortedProductBySale = result.sort((a, b) => b.saleValue - a.saleValue)[0];
  return sortedProductBySale;
};
console.log(topSellingProduct(orders, products));

// Find Top Buyer
//   customer: String,
// {
//   saleValue: Number,
//   saleValue: Number,
//   products: {
//     id: String,
//     name: String,
//     quantity: String}
//   }
const topBuyer = (orders, products) => {
  let customers = orders.map((e) => e.customer);
  customers = [...new Set(customers)];
  let result = customers.map((customer) => {
    let product = {};
    return orders
      .filter((order) => order.customer === customer)
      .reduce((acc, e) => {
        let sumValue = 0;
        e.items.map((i) => {
          let price = products.find((e) => e.id === i.productId).price;
          sumValue += i.quantity * price;
          product[i.productId] = {
            id: i.productId,
            name: products.find((e) => e.id === i.productId).name,
            quantity: (product[i.productId]?.quantity ?? 0) + i.quantity,
          };
        });

        acc[e.customer] = {
          customer: e.customer,
          saleValue: (acc[e.customer]?.saleValue ?? 0) + sumValue,
          products: product,
        };
        return acc;
      }, {});
  });
  result = result.map((e) => Object.values(e)).flat();
  result.sort((a, b) => b.saleValue - a.saleValue);
  return result[0];
};
console.log(topBuyer(orders, products));

// Summarize sale by date
// {
//   date: String,
//   saleValue: Number,
//   costValue: Number,
//   profit: Number,
//   saleQuantity: Number
// }

const saleByDate = (orders, products) => {
  const getDate = (date) => date.slice(0, 10).split();
  let saleByDate = {};
  orders.map((order) => {
    let sale = 0;
    let cost = 0;
    let quantity = 0;
    date = getDate(order.datetime);
    order.items.map((item) => {
      sale +=
        item.quantity * products.find((e) => e.id === item.productId).price;
      cost +=
        item.quantity * products.find((e) => e.id === item.productId).cost;
      quantity += item.quantity;
    });
    saleByDate[date] = {
      date: date[0],
      saleValue: (saleByDate[date]?.saleValue ?? 0) + sale,
      costValue: (saleByDate[date]?.costValue ?? 0) + cost,
      profit: (saleByDate[date]?.profit ?? 0) + (sale - cost),
      saleQuantity: (saleByDate[date]?.saleQuantity ?? 0) + quantity,
    };
  });
  saleByDate = Object.values(saleByDate);
  return saleByDate;
};

console.log(saleByDate(orders, products));
