const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies

const getHobbies = customers
  .filter((r) => r.age >= 25 && r.age <= 30)
  .map((r) => r.hobbies)
  .flat();

const uniqueHobbies = [...new Set(getHobbies)];
console.log(uniqueHobbies);

// Quiz 2: Find customer that interest in swimming

const getInterest = customers
  .filter((r) => r.hobbies.includes("swimming"))
  .map((r) => r.name);

console.log(getInterest);

// Quiz 3: Count customers by hobby and by count desc

const countHobbies = customers.map((r) => r.hobbies).flat();

let result = countHobbies.reduce((acc, currentValue) => {
  if (acc[currentValue]) {
    acc[currentValue]++;
  } else {
    acc[currentValue] = 1;
  }
  return acc;
}, {});
console.log(result);
