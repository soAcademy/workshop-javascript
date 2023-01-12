// 1.หายอดรวมรายได้ทั้งหมด
// 2.หาสินค้าขายดีที่สุด
// 3.เช็ครายการคงเหลือสินค้า
// 4.หาลูกค้าคนไหนซื้อมากซื้อน้อย
// 5.ทำรายการแยกรายวัน
// 6.คำนวณกำไร ต้นทุนรายวัน
const PRODUCTS = [
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
const ORDERS = [
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
//1.หายอดรวมรายได้ทั้งหมด
const totlaSale = (orders, products) => {
  const quantityOrders = orders.reduce((acc, order) => {
    order.items.forEach((r) => {
      const findId = products.find((e) => e.id === r.productId);
      acc += findId.price * r.quantity;
    });
    return acc;
  }, 0);
  return quantityOrders;
};
console.log(totlaSale(ORDERS, PRODUCTS));

// 2.หาสินค้าขายดีที่สุด
const bestSeller = (orders, products) => {
  //หา quantity ที่มากที่สุดใน order ทั้งหมด

  //จัดเตรียมข้อมูล productId , quantity ของ order
  const infoAllSeller = products.map((r) => {
    const info = orders.reduce(
      (acc, e) => {
        e.items.forEach((i) => {
          if (i.productId === r.id) {
            acc.quantity += i.quantity;
          }
        });
        return acc;
      },
      {
        productId: r.id,
        quantity: 0,
        name: r.name,
      }
    );
    return info;
  });
  infoAllSeller.sort((a, b) => b.quantity - a.quantity);

  return infoAllSeller[0];
};
console.log(bestSeller(ORDERS, PRODUCTS));

// 3.เช็ครายการคงเหลือสินค้า
// 4.หาลูกค้าคนไหนซื้อมากซื้อน้อย
// 5.ทำรายการแยกรายวัน
// 6.คำนวณกำไร ต้นทุนรายวัน
