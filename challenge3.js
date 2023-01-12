// const customers = [
//   { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
//   { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
//   { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
//   { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
// ];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// 1. use .filter to filter customear age >= 25 and age <= 30
// 2. use .map to extract hobbies from customer
// 3. use .flat to destructure nested arrays
// 4. use ...new Set to unique data in arrays

// const customer25_30 = customers.filter((e) => e.age >= 25 && e.age <= 30);
// let hobbies25_30 = [];
// customer25_30.map((e) => hobbies25_30.push(e.hobbies));
// hobbies25_30_unique = [...new Set(hobbies25_30.flat())];
// console.log(hobbies25_30);
// console.log(hobbies25_30_unique)

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
// 1. use .some to loop through customer
// 2. use .some in hobbies nested .some from 1 to check if swimming is in hobby
// 3. use .map to extract only customer name

// customerSwim = customers
//   .filter((e) => e.hobbies.some((i) => i === "swimming"))
//   .map((e) => e.name);
// console.log(customerSwim);

// Quiz 3: Count customers by hobby and by count desc
// [
//   {
//     hobby: "reading",
//     count: 2
//   },
//   {
//     hobby: "swimming",
//     count: 2
//   },
//   {
//     hobby: "hiking",
//     count: 1
//   },
//   ...
// ]
// 1. use .map to extract hobbies
// 2. use .flat to destructure nested arrays
// 3. use .reduce to count hobby
// 4. use Object.value to remove key

const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];
hobbies = [];
customers.map((e) => {
  e.hobbies.map((e) => hobbies.push(e));
  hobbies = hobbies.flat();
});
console.log(hobbies);

let hobbiesCounts = hobbies.reduce((acc, e) => {
  acc[e] = {
    hobby: e,
    count: (acc[e]?.count ?? 0) + 1,
  };
  return acc;
}, {});
console.log(hobbiesCounts);
