const products = [
  {
    "id": 1,
    "price": 9.99,
    "cost": 7.25,
    "quantity": 50,
    "name": "Product 1"
  },
  {
    "id": 2,
    "price": 19.99,
    "cost": 14.5,
    "quantity": 40,
    "name": "Product 2"
  },
  {
    "id": 3,
    "price": 29.99,
    "cost": 21.35,
    "quantity": 30,
    "name": "Product 3"
  }
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

//Quiz1
// ยอดรวมรายได้ทั้งหมด
const calculateTotalRevenue = () => {
  const totalRevenue = orders.reduce((total, order) => {
  let orderTotal = 0;
  order.items.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  orderTotal += product.price * item.quantity;
  });
  return total + orderTotal;
  }, 0);
  console.log(totalRevenue.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }));
  }
  calculateTotalRevenue();
    

// หาสินค้าที่ยังเหลืออยู่
const productQuantity = {};
orders.forEach((order) => {
  order.items.forEach((item) => {
    if (!productQuantity[item.productId]) {
      productQuantity[item.productId] = item.quantity;
    } else {
      productQuantity[item.productId] += item.quantity;
    }
  });
});

// หาสินค้าที่ขายดีที่สุด
const bestSeller = Object.entries(productQuantity)
  .sort((a, b) => b[1] - a[1])
  .map(([id, quantity]) => {
    const product = products.find((p) => p.id === Number(id));
    return `${product.name} (${quantity} units sold)`;
  });
console.log(bestSeller[0]);

// หาสินค้าที่ยังเหลืออยู่
const productQuantityRemaining = () => {
  const totalQuantity = products.reduce((acc, { id, quantity }) => {
  acc[id] = {
  name: products.find((p) => p.id === id).name,
  remaining: quantity
  };
  return acc;
  }, {});
  orders.forEach(({ items }) => {
  items.forEach(({ productId, quantity }) => {
  totalQuantity[productId].remaining -= quantity;
  });
  });
  const remainingQuantity = Object.values(totalQuantity);
  console.log(remainingQuantity);
  }
  productQuantityRemaining();


// หาว่าลูกค้าซื้อมากซื้อน้อยต่างกันยังไงบ้าง (หาแพทเทิร์นการซื้อ)
  const customerBuyingPattern = () => {
    const customerPurchases = {};
    orders.forEach(({ customer, items }) => {
      if (!customerPurchases[customer]) {
        customerPurchases[customer] = 0;
      }
      items.forEach(({ quantity }) => {
        customerPurchases[customer] += quantity;
      });
    });
    console.log(customerPurchases);
  }
  customerBuyingPattern();
  
//รายได้รายวัน และกำไรขาดทุนในแต่ละวัน
function dailyProfitAndCost() {
  const profitAndCostByDay = orders.reduce((acc, { datetime, items }) => {
  const date = new Date(datetime).toISOString().slice(0, 10);
  if (!acc[date]) {
  acc[date] = {
  income: 0,
  cost: 0,
  };
  }
  items.forEach(({ productId, quantity }) => {
  const { price, cost } = products.find(({ id }) => id === productId);
  acc[date].income += price * quantity;
  acc[date].cost += cost * quantity;
  });
  return acc;
  }, {});
  const thaiProfitAndCostByDay = Object.entries(profitAndCostByDay).map(([date, {income, cost}]) => {
  return {
  date,
  income: income.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }),
  cost: cost.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }),
  profit: (income - cost).toLocaleString('th-TH', { style: 'currency', currency: 'THB' }),
  }
  });
  console.log(thaiProfitAndCostByDay);
  }
  dailyProfitAndCost();
