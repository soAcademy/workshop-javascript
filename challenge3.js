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

const customersFiltered = customers
.filter(customer => customer.age >= 25 && customer.age <= 30)
.map(item => item.hobbies)
.flat();

const unique = [...new Set(customersFiltered)];

//console.log(customersFiltered);
console.log(unique);

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
const swimming = customers
.filter(customer => customer.hobbies.some(c => c === "swimming"))
.map(item => item.name);



console.log(swimming);


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

const count = Object.entries(
  customers
  .map((customer) => customer.hobbies)
  .flat() // [ 'reading', 'hiking', 'reading', 'cycling', 'painting' ]
  .reduce((acc, hobby) => {
    const counting = (acc[hobby] ?? 0) + 1 
    acc[hobby] = counting
    return acc 
    // {
    //   'reading': 2,
    //   'hiking': 1,
    // }
  }, {})
)
// {
//   'reading': 1,
//   'hiking': 1,
//   'swimming': 1,
//   'cycling': 1,
//   'painting': 1,
// }

console.log(count);


// const numbers = [4567, 9999, 8769]
// const result = numbers.reduce((acc, amount) => acc += amount)

// console.log(result);
