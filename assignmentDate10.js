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

//สิ่งที่อยากได้คือ ordersByProductId หน้าตาประมาณนี้
//[{productId: 1, quantity: 2, price: 400, cost: 300},
// {productId: 2, quantity: 3, price: 100, cost: 30}]

const getQuantityById = (id) => {
  // console.log('start');
  let sumQuality = 0;
  for (let i = 0; i < orders.length; i++) {
    // console.log(orders[i]);
    const inItems = orders[i].items;
    for (let j = 0; j < inItems.length; j++) {
      // console.log(inItems[j]);
      const inProductId = inItems[j].productId;
      const inQuantity = inItems[j].quantity;
      if (inProductId === id) {
        sumQuality += inQuantity;
        // console.log('sumQuality: ' + sumQuality);
      }
    }
  }
  // console.log(`id: ${id}, sumQuality: ${sumQuality}`);
  return sumQuality;
};

const ordersByProductId = () => {
  let arrResult = [];
  for (let i = 0; i < products.length; i++) {
    // console.log('start');
    // console.log(products[i]);
    const inId = products[i].id;
    const quantity = getQuantityById(inId);
    // console.log(`id: ${inId}, quantity:${quantity}`);
    const price = products[i].price * quantity;
    const cost = products[i].cost * quantity;
    const objResult = {
      productId: inId,
      quantity: quantity,
      price: price,
      cost: cost,
    };
    // console.log(objResult);
    arrResult.push(objResult);
  }
  return arrResult;
};

console.log(ordersByProductId());
