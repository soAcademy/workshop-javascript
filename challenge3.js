const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// .filter, .map, .flat, .unique

console.log("Quiz #1");

const filteredCustomers = customers.filter(
  (customer) => customer.age >= 25 && customer.age < 30
);

const filteredHobbies = filteredCustomers
  .map((customer) => customer.hobbies)
  .flat();

const uniqueFilteredHobbies = [...new Set(filteredHobbies)];

console.log(uniqueFilteredHobbies);

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
