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
        const t = { ...acc };
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

// For explaination
// const data = ["k1", "k2", "k3", "k1"].reduce((acc, r) => {
//   // const t = { ...acc };
//   acc[r] = (acc[r] ?? 0) + 1;
//   // console.log(r, t, t[r], acc);
//   return acc;
// }, {});

// This code is counting the number of times each string appears in an array of strings ["k1", "k2", "k3", "k1"]

// Here is a re-written version of the code with explanations:

// const initialValue = {}; // Initial value is an empty object
// const data = ["k1", "k2", "k3", "k1"].reduce((counts, currentString) => {
//   if(counts[currentString]) {
//     // If currentString already exists in the counts object, increment it by 1
//     counts[currentString]++;
//   } else {
//     // Otherwise, set the count of currentString to 1
//     counts[currentString] = 1;
//   }
//   return counts; // Return the updated counts object
// }, initialValue);

// This code uses the reduce method to iterate over the array of strings and create an object that keeps track of the count of each string in the array using the reduce method, which takes two arguments: a callback function and an initial value.
// The callback function, which is given two arguments: an accumulator (counts) and the current value (currentString) in the array. It then checks if the currentString already exists in the counts object, if it does, it increments it by 1, if it doesn't it sets the count of currentString to 1.
// Finally, it returns the updated counts object. The result is an object that contains the count of each string in the original array.
// For example, the final object will be {"k1": 2, "k2": 1, "k3": 1}

// Sure, here is a step-by-step breakdown of how the code works:

// 1. We start with an empty object called initialValue which will be used as the starting value for the reduce() method.
// 2. We call the reduce() method on the array of strings ["k1", "k2", "k3", "k1"]. The first argument is the callback function, which takes two arguments: counts and currentString.
// 3. On the first iteration, counts is equal to initialValue (which is an empty object) and currentString is equal to "k1".
// 4. The code checks if counts has a property with the key of currentString. Since this is the first iteration, it does not have a property with key "k1" yet, so it enters the else block and adds a new property to counts with key "k1" and sets its value to 1.
// 5. Next, the reduce() method moves to the next element in the array and assigns currentString to "k2". It then checks if counts has a property with key "k2" and it doesn't, so it enters the else block and adds a new property to counts with key "k2" and sets its value to 1.
// 6. The process repeats for the next elements of the array and at the end of the iteration, counts will be equal to { "k1": 2, "k2": 1, "k3": 1 }.
// 7. Finally the reduce method returns the final counts object to the variable data

// This way we got the count of each element in the array in a simple and readable way.
