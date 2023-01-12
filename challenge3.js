const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

<<<<<<< HEAD
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
  const findHob = customers.map((customer) => customer.hobbies).flat(); // หา hobby ทั้งหมดจาก customers
  const uniqHob = [...new Set(findHob)]; // กรอง hobby แต่ละ ประเภท ** นำ hobby ที่ซ้ำกันออก
  const result = uniqHob.reduce((acc, r, index) => {
    console.log(index, r, acc);
    const aa = findHob.reduce((a, b, index2) => {
      console.log("g",index2, b, a);
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

// answer q3 

// const countCustomerByHobbies = (customers) =>
//   Object.entries(
//     customers
//       .map((customer) => customer.hobbies)
//       .flat()
//       .reduce((acc, r) => {
//         acc[r] = (acc[r] ?? 0) + 1;
//         return acc;
//       }, {})
//   )
//     .map((r) => ({
//       hobby: r[0],
//       count: r[1],
//     }))
//     .sort((a, b) => b.count - a.count);

// console.log("Q3: ", countCustomerByHobbies(customers));
=======
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

console.log("Q1: ", getCustomerHobbies(customers));

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
// 1. use .filter to loop through customer
// 2. use .some in hobbies nested .filter from 1 to check if swimming is in hobby
// 3. use .map to extract only customer name

const getCustomersByInterest = (customers, interest) =>
  customers
    .filter((customer) => customer.hobbies.some((hobby) => hobby === interest))
    .map((customer) => customer.name);

console.log("Q2: ", getCustomersByInterest(customers, "swimming"));

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
>>>>>>> 9a65b72f84ed1e831091ca853192ea82c4892780
