// const powerFunc = (num) => {
//   const result = num.map((r) => r ** 2);
//   return result;
// };

// console.log(powerFunc([1, 2, 3, 4]));

// ############ ข้อ 1 ###############

// const user = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const userNames = (obj) => {
//   const names = obj.map((r) => r.name);
//   return names;
// };

// console.log(userNames(user));

// ############ ข้อ 2 ###############

// const array = [1, 2, 3, 4, 5];

// const oddNum = (num) => {
//   const odd = num.filter((r) => r % 2 !== 0);
//   return odd;
// };

// console.log(oddNum(array));

// ############ ข้อ 3 ###############

// const userInfo = [
//   { id: 1, name: "A", tel: "0818218888" },
//   { id: 2, name: "B", tel: "099111222" },
// ];

// const filterUser = (info, phone) => {
//   const filterInfo = info.filter((r) => r.tel === phone);
//   return filterInfo;
// };
// console.log(filterUser(userInfo, "099111222"));

// ############ ข้อ 4 ###############

// const array = [3, 1, 2, 0];

// const sortArray = (num) => {
//   const copy = [...array];
//   copy.sort((a, b) => a - b);
//   return copy;
// };
// console.log(sortArray(array));
// console.log(array);

// ############ ข้อ 5 ###############

// const array = [
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];

// const sortArray = (obj) => {
//   const copy = [...array];
//   copy.sort((a, b) => a.id - b.id);
//   return copy;
// };

// console.log(sortArray(array));
// console.log(array);

// // ############ ข้อ 6 ###############

// const students = [
//   { name: "Bin", score: 68 },
//   { name: "Jam", score: 70 },
//   { name: "Nan", score: 72 },
//   { name: "Ploy", score: 65 },
// ];

// const failStudent = (obj) => {
//   const scores = obj.filter((r) => r.score < 70).map((r) => r.name);
//   return scores;
// };

// console.log(failStudent(students));

// // ############ ข้อ 7 ###############

const array = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glorilla", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];

const priceNet = (obj) => {
  const pricePaidAlready = obj
    .filter((r) => r.status === "PAID")
    .map((r) => r.quantity * r.price)
    .reduce((acc, r) => {
      acc += r;
      return acc;
    }, 0);
  return pricePaidAlready;
};

console.log(priceNet(array));

// // ############ ข้อ 8 ################
