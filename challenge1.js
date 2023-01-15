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

// Quiz: 1 by myself
/*const calculateTotalSale = (orders, products) => {
  const totalSale = orders
    .map((r) => {
      const itemDetail = r.items.map((item) => {
        const productDetail = products.find(
          (product) => product.id === item.productId
        );
        const sale = item.quantity * productDetail.price;
        // console.log(product);
        // console.log(typeof(sale));
        return sale;
      });
      return itemDetail;
    })
    .flat()
    // .reduce((acc, result) => acc + result);
  return totalSale;
};
console.log(`Total sale =`, calculateTotalSale(orders, products));*/


//Quiz: 2 by myself
/*const topSellingProduct = (products, orders) => {
  const orderDetail = orders.map((order) => order.items).flat();
  // console.log(orderDetail);
  const productDetail = products
    .map((product) => {
      const filteredProducts = orderDetail.filter(
        (f) => f.productId === product.id
      );
      // console.log(filteredProducts);
      // return filteredProducts;
      const saleValue = filteredProducts.reduce(
        (acc, p) => acc + p.quantity * product.price,
        0
      );
      const costValues = filteredProducts.reduce(
        (acc, p) => acc + p.quantity * product.cost,
        0
      );
      const profit = saleValue - costValues;
      const saleQuantity = filteredProducts.reduce(
        (acc, p) => acc + p.quantity,
        0
      );
      const remainQuantity = filteredProducts.reduce(
        (acc, p) => acc + product.quantity - p.quantity,
        0
      );
      // console.log(saleValue);
      return {
        ...product,
        saleValue,
        costValues,
        profit,
        saleQuantity,
        remainQuantity,
      };
    })
    // console.log(productDetail);
    .sort((a, b) => b.saleValue - a.saleValue);
  return productDetail;
};

console.log(`Top Selling Product :`, topSellingProduct(products, orders));*/


// Quiz: 3 (Use code from answer => Study new method)
/*const topBuyer = (orders, products) => {
    const customers = [...new Set(orders.map((order) => order.customer))];
    // console.log(customers) //=> Build structure of required answers by customer names.
    const result = customers
      .map((customer) => {
        const filteredItems = orders
          .filter((order) => order.customer === customer)
          .map((r) => r.items)
          .flat();
        //console.log(filteredItems) //=> Build object of productId & quantity by separating from customer Array.
          const groupItems = filteredItems.reduce((acc, r) => {
          acc[r.productId] = {
            productId: r.productId,
            quantity: (acc[r.productId]?.quantity ?? 0) + r.quantity,
          };
          // console.log(acc) //=> Calculate total quantity by separating from product.
          return acc;
        }, {});
        // console.log(groupItems); //=> Grouping total quantity by product to be object individually.
        const items = Object.values(groupItems).map((item) => {
          const product = products.find(
            (product) => product.id === item.productId
          );
          // console.log(product); //=> Mapping data between product and groupItems by productId.
          return {
            ...item, // Data in groupItems.
            price: product.price,
            cost: product.cost,
            saleValue: product.price * item.quantity,
            costValue: product.cost * item.quantity,
            profit: (product.price - product.cost) * item.quantity,
          };
        });
  // console.log(items); //=> Show results from return.
        return {
          customer: customer, // Data in assigned customer.
          items,
          saleValue: items.reduce((acc, r) => acc + r.saleValue, 0), //Refer data from items variable.
          costValue: items.reduce((acc, r) => acc + r.costValue, 0), //Refer data from items variable.
          profit: items.reduce((acc, r) => acc + r.profit, 0), //Refer data from items variable.
        };
      })
      //console.log(result);
      .sort((a, b) => b.saleValue - a.saleValue);
    return result;
  };
  
  console.log("Top Buyer: ", topBuyer(orders, products));*/


//Quiz: 4 (Use code from answer => Study new method)
  const saleByDate = (orders, products) => {
      const ordersByDate = orders.reduce((acc, order) => { // Create the answer structure on the order object.
        const date = order.datetime.slice(0, 10);
        // console.log(date); // Pull data of d/m/y
        const sale = order.items
          .map((r) => {
            const product = products.find((p) => p.id === r.productId);
            // console.log(product);
            return {
              // ...r,
              saleValue: r.quantity * product.price,
            };
          })
          .reduce((acc, r) => acc + r.saleValue, 0);
          console.log(sale);
        acc[date] = { // Create the variable of acc[data] by having property of date, saleValue, quantity.
          date,
          saleValue: (acc[date]?.saleValue ?? 0) + sale, // check what value in acc[date] if none, will use "0"
          quantity: (acc[date]?.quantity ?? 0) + // check what value in acc[date] if none, will use "0"
          order.items.reduce((acc, r) => acc + r.quantity, 0),
        };
        // console.log(acc);
        return acc;
      }, {});
    
      return Object.values(ordersByDate);
    };
    
    console.log("Sale By Date: ", saleByDate(orders, products));
    

// แจกโจทย์ assignment : ให้โจทย์ e-commerce โดยให้ข้อมูล array สินค้ามีอะไรบ้าง สินค้าเป็นเท่าไหร่ จำนวนที่เหลือเท่าไหร่ input2 ให้รายการคำสั่งซื้อจากลูกค้าจริง โจทย์คือ หายอดรวมรายได้ทั้งหมด / ให้หาว่าสินค้าไหนขายดีสุด / ให้เช็คว่าสินค้าแต่ละรายการคงเหลือเท่าไหร่ / หาว่าลูกค้าคนไหนซื้อมากหรือซื้อน้อย / ให้ทำรายได้แยกออกมาเป็นรายวัน / คำนวนกำไร ต้นทุนรายวัน    integrade ความรู้ week 1 ออกมาเป็นชิ้นงานประเมินผล 1 ชิ้น products.json

// 1. calculateTotalSale --> number
// 2. topSellingProduct -> {id: Number, name: String, saleValue: Number, costValue: Number, profit: Number, saleQuantity: Number, remainQuantity: Number}[]
// 3. topBuyer -> {customer: String, saleValue: Number, items: {id: String, name: String, quantity: String}[]}[]
// 4. saleByDate -> {date: String, saleValue: Number, costValue: Number, profit: Number, saleQuantity: Number}[]



