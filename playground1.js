// Q1

// const q1 = (input) => {
//   const arrSquare = input.map((r) => r ** 2);
//   return arrSquare;
// };

// console.log(q1([1, 2, 3, 4]));

// Q2

// let customer = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const q2 = (input) => {
//   const names = input.map((r) => r.name);
//   return names;
// };

// console.log(q2(customer));

// Q3

// const q3 = (input) => {
//   const oddNumber = input.filter((r) => r % 2 !== 0);
//   return oddNumber;
// };

// console.log(q3([1, 2, 3, 4, 5]));

// Q4

// let customer = [
//   { id: 1, name: "A", tel: "0818218888" },
//   { id: 2, name: "B", tel: "0991112222" },
// ];

// const q4 = (input, phoneNumber) => {
//   const findPhoneNumber = input.filter((r) => r.tel === phoneNumber);
//   return findPhoneNumber;
// };

// console.log(q4(customer, "0991112222"));

// Q5

const q6 = (input) => {
  input.sort();
  return input;
};

console.log(q6([3, 1, 2, 0]));
