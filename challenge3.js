const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] }
]

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