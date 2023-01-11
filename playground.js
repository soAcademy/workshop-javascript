const array1 = [1, 2, 3, 4];
const result1 = array1.map((r) => r ** 2);
console.log(result1);

const array2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
const result2 = array2.map((r) => r.name);
console.log(result2);

const array3 = [1, 2, 3, 4, 5];
const result3 = array3.filter((r) => r % 2 !== 0);
console.log(result3);

const array4 = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "091112222" },
];
const result4 = array4.filter((r) => r.tel === "091112222");
console.log(result4);

const array5 = [3, 1, 2, 0];
const result5 = array5.sort((a, b) => a - b);
console.log(result5);

const array6 = [
  { id: 1, name: "A" },
  { id: 3, name: "C" },
  { id: 2, name: "B" },
];
const result6 = array6.sort((a, b) => a.id - b.id);
console.log(result6);

const array7 = [
  { name: "Bin", score: 68 },
  { name: "Jam", score: 70 },
  { name: "Nan", score: 72 },
  { name: "Ploy", score: 65 },
];
const result7 = array7.filter((r) => r.score < 70).map((r) => r.name);
console.log(JSON.stringify(result7));

const array8 = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];
const result8 = array8.filter((r) => r.status === "PAID");
console.log(result8);
const summary = result8.reduce((sum, r) => sum + (r.price * r.quantity),0);
console.log(summary);
