// JS Function Workshop
// Q1
const doubleArray = (x) => x.map((e) => e ** 2);
console.log("Q1: ", doubleArray([1, 2, 3, 4]));

// Q2
let data1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const getName = (data) => data.map((e) => e.name);
console.log("Q2: ", getName(data1));

// Q3
const getOdd = (data) => data.filter((e) => e % 2 !== 0);
console.log("Q3: ", getOdd([1, 2, 3, 4, 5]));

// Q4
let data2 = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "0991112222" },
  { id: 2, name: "B", tel: "0123456789" },
  { id: 2, name: "B", tel: "0252525252" },
];

const filterTel = (data, tel) => data.filter((e) => e.tel === tel);
console.log("Q4: ", filterTel(data2, "0991112222"));
console.log(filterTel(data2, "0818218888"));

// Q5
let arr = [3, 1, 2, 0];
console.log("Q5: ", arr.sort());

// Q6
let data3 = [
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 4, name: "C" },
  { id: 3, name: "D" },
];
const sortId = (data, ascending = true) =>
  ascending
    ? data.sort((a, b) => a.id - b.id)
    : data.sort((a, b) => b.id - a.id);
console.log("Q6: ", sortId(data3));
// console.log(sortId(data3, false));
// console.log(data3);

// Q7
let data4 = [
  { name: "Bin", score: 68 },
  { name: "Jam", score: 70 },
  { name: "Nan", score: 72 },
  { name: "Ploy", score: 65 },
];

const filterScoreBelow = (data) =>
  data.filter((e) => e.score < 70).map((e) => e.name);
console.log("Q7: ", filterScoreBelow(data4));

// Q8
let data5 = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];
const summarizeOrder = (data, status) =>
  data
    .filter((e) => e.status === status)
    .reduce((acc, e) => (acc += e.price * e.quantity), 0);

console.log("Q8: ", summarizeOrder(data5, "PAID"));
console.log(summarizeOrder(data5, "PENDING"));
