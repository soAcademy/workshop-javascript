const customers = [
  { name: "John", age: 25, hobbies: ["reading", "hiking", "swimming"] },
  { name: "Jane", age: 32, hobbies: ["cooking", "dancing", "traveling"] },
  { name: "Bob", age: 28, hobbies: ["cycling", "painting", "swimming"] },
  { name: "Alice", age: 22, hobbies: ["reading", "gardening"] },
];

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// .filter, .map, .flat, .unique
// เราต้องการกรองอายุเราต้อง Filter ซึ่งเราจะได้ข้อมูลเฉพาะที่เราอยากจะได้ จากนั้นเราก็ใช้ map เพื่อดึงเฉพาะ hobby ออกมาก่อนมันคือการดึงตัวทั้งหมดออกมา มันจะได้เป็น array ใน array สองข้อ เพราะรอบที่สองเราไม่ต้องการกรองแล้ว เราต้งอการแค่ hobby จากนั้นเราก็จะได้ array of habby สองก้อนซึ่งเราไม่ต้องการ format นี้ แต่เราต้องการแค่ array of string ตัวหนึ่งเราเลยต้องใช้ unique เพื่อเอาตัวที่มันซ้ำออกไป
// filter ตามอายุ มา map เอาเฉพาะ hobby จากนั้นก็ flat เพื่อให้ Array of array เป้น Array เดียว แล้วจากนั้นเราก็ทำ Unique เพื่อเอาค่าที่มันซ้ำออกไป 

// Quiz 1: Filter customer age >= 25 and age <= 30 and then get unique hobbies
// ["reading", "hiking", "swimming", "cycling", "painting"]
// 1. use .filter to filter customear age >= 25 and age <= 30
// 2. use .map to extract hobbies from customer
// 3. use .flat to destructure nested arrays
// 4. use ...new Set to unique data in arrays
const hobbies = customers
  .filter(c => c.age >= 25 && c.age <= 30)
  .reduce((hobbies, customer) => [...hobbies, ...customer.hobbies], [])
  .filter((hobby, index, allHobbies) => allHobbies.indexOf(hobby) === index)
console.log(hobbies);

// Quiz 2: Find customer that interest in swimming
// ['Johnn', 'Bob']
// const customersInterestInSwimming = customers.reduce((swimmingCustomers, customer) => {
//   if (customer.hobbies.includes('swimming')) {
//       swimmingCustomers.push(customer.name);
//   }
//   return swimmingCustomers;
// }, []);
// console.log(customersInterestInSwimming);

const customersInterestInSwimming = customers
  .filter(customer => customer.hobbies.includes('swimming'))
  .map(customer => customer.name);
console.log(customersInterestInSwimming);


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
// const customersByHobby = customers.reduce((countByHobby, customer) => {
//   customer.hobbies.forEach(hobby => {
//      countByHobby[hobby] = (countByHobby[hobby] || 0) + 1;
//   });
//   return countByHobby;
// }, {});
// console.log(customersByHobby); // prints [

  const customersByHobby = customers.reduce((countByHobby, customer) => {
    customer.hobbies.forEach(hobby => {
      countByHobby[hobby] = (countByHobby[hobby] || 0) + 1;
    });
    return countByHobby;
  }, {});
  
  Object.entries(customersByHobby).forEach(entry => {
    console.log(`Hobby: ${entry[0]}`);
    console.log(`Count: ${entry[1]}`);
  });
  


