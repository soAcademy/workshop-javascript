const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// .filter, .map, .flat, .unique

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']

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

const q1 = customers
  .filter((customers) => customers.age >= 25 && customers.age <= 30)
  .map((r) => r.hobbies)
  .flat();
const uniqJob = [...new Set(q1)];
console.log(uniqJob);

// const q2 = customers.filter((customer) =>
//   customer.hobbies.some((hobby) => hobby === "swimming")
// );
// console.log(q2);

const q2 = customers
  .filter((customer) => customer.hobbies.includes("swimming"))
  .map((r) => r.name);
console.log(q2);

const q3 = Object.entries(
  customers
    .map((r) => r.hobbies)
    .flat()
    .reduce((acc, r) => {
      acc[r] = (acc[r] ?? 0) + 1;
      return acc;
    }, {})
)
  .map((r) => ({ hobby: r[0], count: r[1] }))
  .sort((a,b) => b.count-a.count)
  // .sort((a, b) => b.hobby.localeCompare(a.hobby));

console.log(q3);
