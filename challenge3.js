const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];
console.log("Brackets Notation:: have or not", customers.key);
// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies

const getUniqueHobbies = (customers) => {
  const hobbies = customers
    .filter((r) => {
      if (r.age >= 25 && r.age <= 30) {
        return true;
      }
    })
    .map((customer) => {
      return customer.hobbies;
    })
    .flat();
  const uniqueHobbies = [...new Set(hobbies)];

  return uniqueHobbies;
};

console.log(getUniqueHobbies(customers));

// ["reading", "hiking", "swimming", "cycling", "painting"]

// .filter, .map, .flat, .unique

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

const customersLikeSwimming = (customers) => {
  const swimming = customers
    .filter((customer) => {
      return customer.hobbies.some((hobby) => hobby === "swimming");
    })
    .map((hobby) => {
      return hobby.name;
    });
  return swimming;
};

console.log(customersLikeSwimming(customers));

// Quiz 3: Count customers by hobby and by count desc

const countHobbies = (customers) => {
  const countHobbies = customers
    .map((customer) => customer.hobbies) // ['swimming', ['hiking'],['running']]
    .flat() // ['swimming', 'hiking','running']
    .reduce((acc, hobby) => {
      // first round hobby => swimming
      if (acc[hobby]) {
        // falsy:: '', 0, null, undifined, false
        acc[hobby] = acc[hobby] + 1;
        return acc;
      }
      acc[hobby] = 1;
      return acc; // first round :: {swimming:1}, second round :: {swiming:1,hiking:1}, third round :: {swimming:1,hiking:1,running:1}
    }, {});
  console.log("countHobbies", countHobbies);
  // {
  //   reading: 2,
  //   hiking: 1,
  //   swimming: 2,
  //   cooking: 1,
  //   dancing: 1,
  //   traveling: 1,
  //   cycling: 1,
  //   painting: 1,
  //   gardening: 1
  // }
  console.log("Object.keys(countHobbies)", Object.keys(countHobbies));
  const result = Object.keys(countHobbies).map((hobby) => {
    const count = countHobbies[hobby];
    console.log(`${hobby} count= ${count}`);
    return {
      hobby,
      count,
    };
  });
  return result;
  // after reduce
  // {
  //   "reading": 1,
  //   "hiking": 1
  //   "dancing": 1
  //   "reading": 1
  // }
};
console.log(countHobbies(customers));
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
