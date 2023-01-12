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

// const q5 = (input) => {
//   input.sort();
//   return input;
// };

// console.log(q5([3, 1, 2, 0]));

// Q6

// let customer = [
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];

// const q6 = (input) => {
//   const fineId = input.sort((a, b) => a.id - b.id);
//   return fineId;
// };

// console.log(q6(customer));

// Q7

// let student = [
//   { name: "Bin", score: 68 },
//   { name: "Jam", score: 70 },
//   { name: "Nan", score: 72 },
//   { name: "Ploy", score: 65 },
// ];

// const q7 = (input) => {
//   const scores = input.filter(r => r.score < 70);
//   const names = scores.map(r => r.name);
//   return names;
// };

// console.log(q7(student));

// Q8

// let orderList = [
//   { status: "PAID", name: "Glory", price: 200, quantity: 3 },
//   { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
//   { status: "PAID", name: "VitC", price: 150, quantity: 2 },
// ];

// const q8 = (input) => {
//   const totalPaidOrders = input
//     .filter((r) => r.status === "PAID")
//     .map((r) => r.price * r.quantity)
//     .reduce((acc, r) => {
//       acc += r;
//       return acc;
//     }, 0);
//   return totalPaidOrders;
// };

// console.log(q8(orderList));


