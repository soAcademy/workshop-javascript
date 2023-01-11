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
console.log("Total Sale: ", calculateTotalSale(orders, products));

const topSellingProduct = (orders, products) => {
  const items = orders.map((order) => order.items).flat();
  const result = products
    .map((product) => {
      const filteredItems = items.filter(
        (item) => item.productId === product.id
      );
      const saleValue = filteredItems.reduce(
        (acc, r) => acc + r.quantity * product.price,
        0
      );
      const costValue = filteredItems.reduce(
        (acc, r) => acc + r.quantity * product.cost,
        0
      );
      const saleQuantity = filteredItems.reduce(
        (acc, r) => acc + r.quantity,
        0
      );
      return {
        ...product,
        saleValue,
        costValue,
        profit: saleValue - costValue,
        saleQuantity,
        remainQuantity: product.quantity - saleQuantity,
      };
    })
    .sort((a, b) => b.saleValue - a.saleValue);
  return result;
};

console.log("Top Selling Product: ", topSellingProduct(orders, products));

const topBuyer = (orders, products) => {
  const customers = [...new Set(orders.map((order) => order.customer))];
  const result = customers
    .map((customer) => {
      const filteredItems = orders
        .filter((order) => order.customer === customer)
        .map((r) => r.items)
        .flat();
      const groupItems = filteredItems.reduce((acc, r) => {
        acc[r.productId] = {
          productId: r.productId,
          quantity: (acc[r.productId]?.quantity ?? 0) + r.quantity,
        };
        return acc;
      }, {});
      const items = Object.values(groupItems).map((item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          price: product.price,
          cost: product.cost,
          saleValue: product.price * item.quantity,
          costValue: product.cost * item.quantity,
          profit: (product.price - product.cost) * item.quantity,
        };
      });

      return {
        customer: customer,
        items,
        saleValue: items.reduce((acc, r) => acc + r.saleValue, 0),
        costValue: items.reduce((acc, r) => acc + r.costValue, 0),
        profit: items.reduce((acc, r) => acc + r.profit, 0),
      };
    })
    .sort((a, b) => b.saleValue - a.saleValue);
  return result;
};

console.log("Top Buyer: ", topBuyer(orders, products));

const saleByDate = (orders, products) => {
  const ordersByDate = orders.reduce((acc, order) => {
    const date = order.datetime.slice(0, 10);
    
  })
}

// แจกโจทย์ assignment : ให้โจทย์ e-commerce โดยให้ข้อมูล array สินค้ามีอะไรบ้าง สินค้าเป็นเท่าไหร่ จำนวนที่เหลือเท่าไหร่ input2 ให้รายการคำสั่งซื้อจากลูกค้าจริง โจทย์คือ หายอดรวมรายได้ทั้งหมด / ให้หาว่าสินค้าไหนขายดีสุด / ให้เช็คว่าสินค้าแต่ละรายการคงเหลือเท่าไหร่ / หาว่าลูกค้าคนไหนซื้อมากหรือซื้อน้อย / ให้ทำรายได้แยกออกมาเป็นรายวัน / คำนวนกำไร ต้นทุนรายวัน    integrade ความรู้ week 1 ออกมาเป็นชิ้นงานประเมินผล 1 ชิ้น products.json

// 1. calculateTotalSale --> number
// 2. topSellingProduct -> {id: Number, name: String, saleValue: Number, costValue: Number, profit: Number, saleQuantity: Number, remainQuantity: Number}[]
// 3. topBuyer -> {customer: String, saleValue: Number, products: {id: String, name: String, quantity: String}[]}[]
// 4. saleByDate -> {date: String, saleValue: Number, costValue: Number, profit: Number, saleQuantity: Number}[]
