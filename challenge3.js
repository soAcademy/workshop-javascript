const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] }
]

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// .filter, .map, .flat, .unique
// const filteredAge = customers.filter(c => c.age >= 25 && c.age <= 30);
// //  console.log(filteredAge);
// const hobbies = filteredAge.map(item => item.hobbies).flat();
// console.log("hobbies",hobbies);
// const uniqueHobbies = [...new Set(hobbies)];
// console.log("uniqueHobbies",uniqueHobbies);
const findUniqueHobbies = (customers) => {
  const hobbies = customers
  .filter(customer => customer.age >= 25 && customer.age <= 30)
  .map(customer => customer.hobbies)
  .flat();
  const uniqueHobbies = [...new Set(hobbies)];
  return uniqueHobbies
}
console.log("find unique hobbies",findUniqueHobbies(customers));

// Quiz 2: Find customer that interest in swimming
// ['John', 'Bob']
const findSwimCustomer = (customers) => {
  const swimCustomer = customers
  .filter(customer => customer.hobbies.some((hobby)=>  hobby === 'swimming'))
  .map(customer => customer.name);
  return swimCustomer
}
console.log("find swim customer",findSwimCustomer(customers));

// Quiz 3: Count customers by hobby and by count desc
// [
//   {hobby: "reading",count: 2},
//   {hobby: "swimming",count: 2},
//   {hobby: "hiking",count: 1},...]


