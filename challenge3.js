const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// // Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// // ["reading", "hiking", "swimming", "cycling", "painting"]
// // .filter, .map, .flat, .unique
// const hobbies = customers
//   .filter((customer) => customer.age >= 25 && customer.age <= 30)
//   .map((r) => r.hobbies)
//   .flat();
// const uniqueHobbies = [...new Set(hobbies)];
// console.log(uniqueHobbies);

// // Quiz 2: Find customer that interest in swimming
// // ['John', 'Bob']
// const cusSwim = customers.reduce((acc, customer) => {
//   // console.log(r.hobbies.some(sw => sw === 'swimming'));
//   const swim = customer.hobbies.some((hobby) => hobby === "swimming");
//   return swim ? [...acc, customer.name] : acc;
// }, []);
// console.log(cusSwim);

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
// const hobbies = customers.map((customer) => customer.hobbies).flat();
// const uniqueHobbies = [...new Set(hobbies)];
// // console.log(uniqueHobbies);

const sumHobbies = uniqueHobbies.reduce((acc, uniqHob) =>{
  const allHops = hobbies.reduce((acc, eachAllHob) => {
    return eachAllHob === uniqHob ? acc + 1 : acc;
  }, 0);
  return [...acc, { hobby: uniqHob, count: allHops}];
}, []);

const hobbiesByDesc = Object.values(sumHobbies).sort((a, b) => b.count - a.count);
console.log(hobbiesByDesc);
