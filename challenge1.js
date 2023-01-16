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

// console.log("Challange1.1 หายอดรวมรายได้ทั้งหมด");
// const resultNo1 = () => {
//   const listOrderFromOrders = orders.map((r) => r.items).flat();
//   const totalIncome = listOrderFromOrders.reduce((acc, r) => {
//     const productId = r.productId;
//     const findProduct = products.find((r) => r.id === productId);
//     // console.log(findProduct.price * r.quantity);
//     return acc + findProduct.price * r.quantity;
//   }, 0);
//   console.log(totalIncome);
// };
// resultNo1();
// ///////////////////////////////////////////////////////////////

// console.log(
//   "\nChallange1.2 ให้หาว่าสินค้าไหนขายดีสุด/\nให้เช็คว่าสินค้าแต่ละรายการคงเหลือเท่าไหร่"
// );
// const resultNo2 = () => {
//   const mapProduct = products.map((product) => {
//     // console.log('product.id: ' + product.id);
//     const sold = orders
//       .map((order) => {
//         // console.log(order.items);
//         const amountOfProdId = order.items.reduce((acc, r) => {
//           // console.log(r);
//           return acc + (r.productId === product.id ? r.quantity : 0);
//         }, 0);
//         // console.log(amountOfProdId);
//         return amountOfProdId;
//       })
//       .reduce((acc, r) => acc + r, 0);
//     // console.log(inOrders);
//     return {
//       ...product,
//       sold: sold,
//       remain: product.quantity - sold,
//       values: Math.round(product.price * sold * 100) / 100,
//       profit: Math.round((product.price - product.cost) * sold * 100) / 100,
//     };
//   });
//   // console.log(mapProduct);
//   const sortBestSeller = Object.values(mapProduct).sort(
//     (a, b) => b.sold - a.sold
//   );
//   console.log(sortBestSeller);
// };
// resultNo2();
// ///////////////////////////////////////////////////////////////

// 3. topBuyer -> {customer: String, saleValue: Number, items: {id: String, name: String, quantity: String}[]}[]
console.log("\nChallange1.3 หาว่าลูกค้าคนไหนซื้อมากหรือซื้อน้อย");
const resultNo3 = () => {
  const customer = orders.map((order) => order.customer);
  const uniqueCus = [...new Set(customer)];
  // console.log(uniqueCus);
  const result = uniqueCus.map((user) => {
    // console.log(user);
    const eachOrder = orders.reduce((acc, r) => {
      // console.log(r);
      // console.log(r.customer === user ? r.items : '');
      return r.customer === user ? [...acc, r.items] : acc;
    }, []);
    // console.log(eachOrder.flat());
    const itemsFlat = eachOrder.flat();
    const uniqItems = itemsFlat.map((item) => {
      // console.log(item);
      return item.productId;
    });
    const reUniqItems = [...new Set(uniqItems)];
    // console.log(reUniqItems);

    const alignItems = reUniqItems.map((uItem) => {
      const countQuantity = itemsFlat.reduce((acc, r) => {
        return acc + (r.productId === uItem ? r.quantity : 0);
      }, 0);
      const prodNameIdx = products.findIndex((p) => p.id === uItem);
      // console.log(prodNameIdx);
      return {
        id: uItem,
        name: products[prodNameIdx].name,
        quantity: countQuantity,
      };
    });

    // console.log(alignItems);
    const saleValue = alignItems.reduce((acc, r) => {
      return acc + products[products.findIndex((p) => p.id === r.id)].price * r.quantity;
    }, 0);

    return {
      customer: user,
      saleValue: saleValue,
      items: [...alignItems],
    };
  });
  return result.sort((a, b) => b.saleValue - a.saleValue);
  // console.log(result);
};
console.log(JSON.stringify(resultNo3(), null, 2));
///////////////////////////////////////////////////////////////

//4.ให้ทำรายได้แยกออกมาเป็นรายวัน

//5.คำนวนกำไร ต้นทุนรายวัน
