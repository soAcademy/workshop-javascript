// const powerFunc = (num) => {
//   const result = num.map((r) => r ** 2);
//   return result;
// };

// console.log(powerFunc([1, 2, 3, 4]));

// ############ ข้อ 1 ###############

const user = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const userNames = (obj) => {
  const names = obj.map((r) => r.name);
  return names;
};

console.log(userNames(user));
