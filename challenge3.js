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
// 1. use .map to extract hobbies
// 2. use .flat to destructure nested arrays
// 3. use .reduce to count hobby
// 4. use Object.entries to remove key

const countCustomerByHobbies = (customers) =>
  Object.entries(
    customers
      .map((customer) => customer.hobbies)
      .flat()
      .reduce((acc, r) => {
        const t = { ...acc };
        acc[r] = (acc[r] ?? 0) + 1;
        return acc;
      }, {})
  )
    .map((r) => ({
      hobby: r[0],
      count: r[1],
    }))
    .sort((a, b) => b.count - a.count);

console.log("Q3: ", countCustomerByHobbies(customers));

// For explaination
const data = ["k1", "k2", "k3", "k1"].reduce((acc, r) => {
  const t = { ...acc };
  acc[r] = (acc[r] ?? 0) + 1;
  console.log(r, t, t[r], acc);
  return acc;
}, {});
