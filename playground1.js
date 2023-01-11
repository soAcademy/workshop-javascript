console.log("JS Function Workshop #1");

const array1 = [1, 2, 3, 4];
const array1Squared = array1.map((x) => x ** 2);

console.log(array1Squared);

console.log("JS Function Workshop #2");

const array2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const array2Names = array2.map((x) => x.name);

console.log(array2Names);

console.log("JS Functions Workshop #3");

const array3 = [1, 2, 3, 4, 5];
const array3Odd = array3.filter((x) => x % 2 === 1);

console.log(array3Odd);

console.log("JS Functions Workshop #4");

const array4 = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "0991112222" },
];
const array4Filtered = array4.filter((x) => x.tel === "0991112222");

console.log(array4Filtered);
