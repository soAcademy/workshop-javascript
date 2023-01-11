// Quiz 1
// const arr = [1, 2, 3, 4];
// const result = arr.map((r) => r ** 2);
// console.log(result);

// Quiz 2
// const arr2 = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];
// const result2 = arr2.map((r) => r.name);
// console.log(result2);

// Quiz 3
// const arr3 = [1, 2, 3, 4, 5];
// const result3 = arr3.filter((r) => r % 2 !== 0);
// console.log(result3);

// Quiz 4
// const arr4 = [
//   { id: 1, name: "A", tel: "0818218888" },
//   { id: 2, name: "B", tel: "0991112222" },
// ];
// const result4 = arr4.filter((r) => r.tel === "0991112222");
// console.log(result4);

//Quiz 5
// const arr5 = [3, 1, 2, 0];
// arr5.sort();
// console.log(arr5);

// Quiz 6
// const arr6 = [
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];
// arr6.sort((a, b) => a.id - b.id);
// console.log(arr6);

// Quiz 7
// const arr7 = [
//   { name: "Bin", score: 68 },
//   { name: "Jam", score: 70 },
//   { name: "Nan", score: 72 },
//   { name: "Ploy", score: 65 },
// ];
// const result7 = arr7.filter((r) => r.score < 70);
// const result7final = result7.map((r) => r.name);
// console.log(result7final);

// Quiz 8
const arr8 = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];
const a1 = arr8.filter((r) => r.status === "PAID");
const a2 = a1.map((r) => r.price * r.quantity);
const a3 = a2.reduce((acc, r) => acc + r);
console.log(a3);
