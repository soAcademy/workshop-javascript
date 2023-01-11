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

const userInfo = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "099111222" },
];

const filterUser = (info, phone) => {
  const filterInfo = info.filter((r) => r.tel === phone);
  return filterInfo;
};
console.log(filterUser(userInfo, "099111222"));
