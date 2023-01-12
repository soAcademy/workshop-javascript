// let input = [1,2,3,4];
// const output = input.map((r) => r*r);
// console.log(output);

// let input = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];
// const output = input.map((r) => r.name);
// console.log(output);

// let input = [1, 2, 3, 4, 5];
// const output = input.filter((r) => r % 2 !== 0);
// console.log(output);

// let input = [
//   { id: 1, name: "A", tel: "0818218888" },
//   { id: 2, name: "B", tel: "0991112222" },
// ];
// const output = input.filter((r) => r.tel === `0991112222`);
// console.log(output);

// let input = [3, 1, 2, 0];
// const output = input.sort();
// console.log(output);

// let input = [
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];
// const output = input.sort((a, b) => a.id - b.id);
// console.log(output);

// let input = [
//   { name: "Bin", score: 68 },
//   { name: "Jam", score: 70 },
//   { name: "Nan", score: 72 },
//   { name: "Ploy", score: 65 },
// ];
// const output = input.filter((r) => r.score < 70).map((r) => r.name);
// console.log(output);

let input = [
  { status: `PAID`, name: `Glory`, price: 200, quantity: 3 },
  { status: `PENDING`, name: `Glory`, price: 200, quantity: 1 },
  { status: `PAID`, name: `VitC`, price: 150, quantity: 2 },
];
const output = input
  .filter((r) => r.status === `PAID`)
  .map((r) => r.price * r.quantity)
  .reduce((acc, r) => acc + r);
console.log(output);