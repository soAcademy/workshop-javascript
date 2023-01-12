const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

const result = customers.reduce((acc, c) => acc + c.name,"")
const result2 = customers.reduce((acc, c) => (acc+c.age),0)/customers.length
console.log(result2);

const result3 = customers.reduce((acc, c) => {
  return {
    ...acc,
    hobbyCount: (acc.hobbyCount ?? 0) + c.hobbies.length,
    sumAge: (acc.sumAge ?? 0) + c.age,
  }
}, {})
console.log(result3);
// {
      // hobbyCount: 10,
      // sumAge: 59
// }

//Ans Quiz1
  // const output1 = customers.filter((f) =>f.age >= 25 && f.age <=30).map(a=>a.hobbies).flat();
  // // console.log(output);
  // const unique = [...new Set(output)];
  // console.log(unique);

  //Ans Quiz2 > indexof, include, some
// const ans = customers.filter((r)=> r.hobbies.some((r)=> r===`swimming`)).map((r)=> r.name);
// console.log(ans);

// const sum = [1,2,3,4,5].reduce((acc,r)=> (acc+r)**2,0)
// console.log(sum);



//Ans Quiz3
// const AnsQuiz3 = (customers) => {
  const items = customers.map((r)=> r.hobbies).flat();
  // const hobbyCount = items.reduce(reduce
// console.log(items);
  // const unique = [...new Set(items)]
  // // console.log(unique);
  // const result = items.map((item) => {
  //   const filterItem = unique.filter((u)=> u === items);
  //   return {
  //     item,
  //   }
  // })
  
  // console.log(hobby);
  // const hobby = unique.filter(item => items === unique);
  // const count = items.filter((r)=> r === hobby).length;
  // const count = 
  // console.log(reading);
  const hikingCount = items.filter((r)=> r === `hiking`).length;
  const swimmingCount = items.filter((r)=> r === `swimming`).length;
  const cookingCount = items.filter((r)=> r === `cooking`).length;
  const dancingCount = items.filter((r)=> r === `dancing`).length;
  const travelingCount = items.filter((r)=> r === `traveling`).length;
  const cyclingCount = items.filter((r)=> r === `cycling`).length;
  const paintingCount = items.filter((r)=> r === `painting`).length;
  const gardeningCount = items.filter((r)=> r === `gardening`).length;
  return [
    {
      hobby: "hiking",
      count: hikingCount
    }
  ]

// return{
//   hobby,
// //   count,
// }

// }

// console.log(AnsQuiz3(customers))






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
const data = ["k1", "k2", "k3", "k1"].reduce((acc, r) => {
  const t = { ...acc };
  acc[r] = (acc[r] ?? 0) + 1;
  console.log(r, t, t[r], acc);
  return acc;
}, {});
