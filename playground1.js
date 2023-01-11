console.log("JS function Workshop #1");

const array1 = [1, 2, 3, 4];
const array1Squared = array1.map((x) => x ** 2);

console.log(array1Squared);

console.log("JS function Workshop #2");

const array2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const array2Names = array2.map((x) => x.name);

console.log(array2Names);
