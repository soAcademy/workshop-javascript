const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
//tips : Filter,map,flat(),uniques,

const findHobbies = (input) => {
  const filterAge = input
    .filter((r) => r.age >= 25 && r.age <= 30)
    .map((r) => r.hobbies)
    .flat();

  const uniqueHobbies = [...new Set(filterAge)];
  console.log(uniqueHobbies);
};
findHobbies(customers);
console.log("----------------------------------------------------------------");

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
// 1. use .some to loop through customer
// 2. use .some in hobbies nested .some from 1 to check if swimming is in hobby
// 3. use .map to extract only customer name

const findSwimming = (input) => {
  const filterHobbies = input
    .filter((r) => {                                  //filter จะ return ค่าก็ต่อเมื่อเป็น true  
      const index = r.hobbies.indexOf("swimming");
      return index !== -1;  //สามารถใส่ condition ที return ได้ เพื่อให้ return boolean เป็น true/false

      // if (index !== -1){
      // return true;
      // //console.log(r.name);
      // }
      // return false;
    })
    .map((c) => c.name);
  console.log(filterHobbies);
};
findSwimming(customers);

// Quiz 3: Count customers by hobby and by count desc
// resualt : 
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
// 4. use Object.value to remove key

const countCustomers = (input) => {
  const extractHobbies = input
    .map((c) =>c.hobbies)
    .flat()
    .reduce((acc, r) => {
      acc[r] = (acc[r] || 0) + 1;      //(acc[r] || 0) check ว่ามี value ใน key ไหม ถ้ามีจะ return value of key นั้นๆ
      return acc;                      //ถ้าไม่มีค่า หรือ undefined,null จะ return value 0
    }, {});

    let result = Object.values(extractHobbies);
    console.log(result);
    
    //console.log(extractHobbies);
}
countCustomers(customers);


// let count = hobbies.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {})
// console.log(count);

