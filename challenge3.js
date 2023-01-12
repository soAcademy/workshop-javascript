const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

//// day 4

// q1

const q1 = (customers) => {
  const customerAges = customers
    .filter((customer) => customer.age >= 25 && customer.age <= 30)
    .map((r) => r.hobbies)
    .flat();
  const unique = [...new Set(customerAges)];
  return unique;
};

console.log(q1(customers));
