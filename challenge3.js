const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// 1. use .filter to filter customear age >= 25 and age <= 30
// 2. use .map to extract hobbies from customer
// 3. use .flat to destructure nested arrays
// 4. use ...new Set to unique data in arrays

const getCustomerHobbies = (customers) => [
  ...new Set(
    customers
      .filter((customer) => customer.age >= 25 && customer.age <= 30)
      .map((customer) => customer.hobbies)
      .flat()
  ),
];

// console.log("Q1: ", getCustomerHobbies(customers));

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
// 1. use .filter to loop through customer
// 2. use .some in hobbies nested .filter from 1 to check if swimming is in hobby
// 3. use .map to extract only customer name

const getCustomersByInterest = (customers, interest) =>
  customers
    .filter((customer) => customer.hobbies.some((hobby) => hobby === interest))
    .map((customer) => customer.name);

// console.log("Q2: ", getCustomersByInterest(customers, "swimming"));

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
  .sort((a, b) => b.count - a.count);
// .sort((a, b) => b.hobby.localeCompare(a.hobby));

console.log(q3);
