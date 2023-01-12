const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

//// day 4

// Q1

// const q1 = (customers) => {
//   const customerAges = customers
//     .filter((customer) => customer.age >= 25 && customer.age <= 30)
//     .map((r) => r.hobbies)
//     .flat();
//   const unique = [...new Set(customerAges)];
//   return unique;
// };

// console.log(q1(customers));

// Q2

// const q2 = (customers) => {
//   const cusInterest = customers
//     .filter((customer) => {
//       const findHobby = customer.hobbies.some((hobby) => hobby === "swimming");
//       // console.log(customer);
//       // console.log(findHobby);
//       return findHobby;
//     })
//     .map((findNames) => findNames.name);
//   return cusInterest;
// };

// console.log(q2(customers));

// Q3

const q3 = (customers) => {
  const findHob = customers.map((customer) => customer.hobbies).flat();
  const uniqHob = [...new Set(findHob)];
  const result = uniqHob.reduce((acc, r) => {
    const aa = findHob.reduce((a, b) => {
      const check = r === b;
      return check ? a + 1 : a;
      // console.log(check);
    }, 0);
    // console.log(aa);
    return [
      ...acc,
      {
        hobby: r,
        count: aa,
      },
    ];
  }, []);
  const answer = Object.values(result).sort((a, b) => b.count - a.count);
  // console.log(answer);
  return answer;
  // console.log(uniqHob);
  // return findHob;
};
// console.log(acc);
console.log(q3(customers));
