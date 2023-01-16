const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

//Quiz1 => By myself
/*const filterCustomers = (customers) => {
  const output = customers
    .filter((f) => f.age >= 25 && f.age <= 30)
    .map((a) => a.hobbies)
    .flat();
  // console.log(output);
  const result = [...new Set(output)];
  return result;
};
console.log("Customers hobbies 25-30 are", filterCustomers(customers));*/

//Ans Quiz2 => By myself
/*const whoInterestSwimming = (customers) => {
  const ans = customers
    .filter((r) => r.hobbies.some((r) => r === `swimming`))
    .map((r) => r.name);
  return ans;
};
console.log("Person is interested swimming:", whoInterestSwimming(customers));*/

//Ans Quiz3 => By myself
const countCustomerByHobby = (customers) => {
  let hobbyCount = [];
  const hobbiesDetail = customers.map((h) => h.hobbies);
  for (let i = 0; i < hobbiesDetail.length; i++) {
    hobbyCount = hobbyCount.concat(hobbiesDetail[i]);
  }
  const colorCount = hobbyCount.reduce((count, r) => {
    count[r] = (count[r] || 0) + 1;
    return count;
  }, {});
  const result = Object.entries(colorCount).forEach(([hobby, count]) => {
    console.log(`hobby: "${hobby}", count: ${count}`);
  });
  return result;
};
console.log(countCustomerByHobby(customers));

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
