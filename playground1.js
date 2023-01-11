//#1
const numbers = [1, 2, 3, 4];
const numbersSquared = numbers.map((number) => number ** 2);

console.log(numbersSquared);

//#2
const list = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const nameList = list.map((n) => n.name);

console.log(nameList);

//#3
const fiveNumbers = [1, 2, 3, 4, 5];
const numberOdd = fiveNumbers.filter((number) => number % 2 !== 0);

console.log(numberOdd);

//#4
const telList = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "0991112222" },
];
const telB = telList.filter((telnumber) => telnumber.tel === "0991112222");

console.log(telB);

//#5
const unSortedNumbers = [3, 1, 2, 0];
const sortedNumber = unSortedNumbers.sort();

console.log(sortedNumber);

//#6
const unSortedList = [
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];
const sortedList = unSortedList.sort((a, b) => a.id - b.id);

console.log(sortedList);

//#7
const scoreList = [
  { name: "Bin", score: 68 },
  { name: "Jam", score: 70 },
  { name: "Nan", score: 72 },
  { name: "Ploy", score: 65 },
];
const scoreListFiltered = scoreList.filter((s) => s.score < 70);

console.log(scoreListFiltered);

//#8
const customerList = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];

const paid = customerList
  .filter((c) => c.status === "PAID")
  .reduce((sum, c) => sum + c.price * c.quantity, 0);

console.log(paid);
