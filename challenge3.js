const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

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
    .map((customer) => customer.hobbies)
    .flat()
    .reduce((acc, hobby) => {
      if (acc[hobby]) {
        acc[hobby] = acc[hobby] + 1;
        return acc;
      }
      acc[hobby] = 1;
      return acc;
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
