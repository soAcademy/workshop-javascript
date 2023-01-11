// เขียนฟังก์ชั่นโดยใช้ .map แปลงค่าให้เป็นเลขยกกําลัง2
// function toPowerOfTwo(arr) {
//   return arr.map(val => val ** 2);
// }
// let input = [1, 2, 3, 4];
// let output = toPowerOfTwo(input);
// console.log(output); // prints [1, 4, 9, 16]
// การเขียนแบบนี้มันเขียนได้ แต่ Arrowฟังชันมันกำลังมา และใช้ได้มากกว่า เพราะมันเป็นเรื่องของ Syntax การเขียนแบบนี้มันจะเปลี่ยนตัว Chain ไม่ได้ 

const toPowerOfTwo = (arr) => arr.map(val => val ** 2);
const input = [1, 2, 3, 4];
const output = toPowerOfTwo(input);
console.log(output); // prints [1, 4, 9, 16]


// เขียนฟังก์ชั่นโดยใช้ .map แปลงค่าให้เป็น name
const convertToName = (arr) => arr.map(obj => obj.name);
const input1 = [{id: 1, name: "A"}, {id: 2, name: "B"}];
const output1 = convertToName(input1);
console.log(output1); // prints ["A", "B"]


// เขียนฟังก์ชั่นโดยใช้ .filter หาเฉพาะเลขคี่
const findOddNumbers = (arr) => arr.filter(val => val % 2 !== 0);
const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output2 = findOddNumbers(input2);
console.log(output2); // prints [1, 3, 5, 7, 9]


// เขียนฟังก์ชั่นโดยใช้ .filter หาข้อมูล tel = 0991112222
const findByTel = (arr, tel) => arr.filter(obj => obj.tel === tel);
const input3 = [{id: 1, name: "A", tel: "0818218888"}, {id: 2, name: "B", tel: "0991112222"}];
const output3 = findByTel(input3, "0991112222");
console.log(output3); // prints [{id: 2, name: "B", tel: "0991112222"}]


// เขียนฟังก์ชั่นโดยใช้ .sort เรียงเลขใน array จากน้อยไปมาก
const sortAscending = (arr) => arr.sort((a, b) => a - b);
const input4 = [2, 4, 8, 10, 9, 6];
const output4 = sortAscending(input4);
console.log(output4); // prints [2, 4, 6, 8, 9, 10]


// เขียนฟังก์ชั่นโดยใช้ .sort เรียงค่า by id น้อยไปมาก
const sortByIdAsc = (arr) => arr.sort((a, b) => a.id - b.id);
const input5 = [{id: 2, name: "B"}, {id: 1, name: "A"}];
const output5 = sortByIdAsc(input5);
console.log(output5); // prints [{id: 1, name: "A"}, {id: 2, name: "B"}]


// เขียนฟังก์ชั่นหาชื่อนักเรียนที่คะแนนน้อยกว่า 70 คะแนน
const findStudentWithScoreBelow70 = (arr) => arr.filter(student => student.score < 70).map(student => student.name);
const input6 = [{name: "Bin", score: 68}, {name: "Jam", score: 70}, {name: "Nan", score: 72}, {name: "Ploy", score: 65}];
const output6 = findStudentWithScoreBelow70(input6);
console.log(output6); // prints ["Bin", "Ploy"]


// เขียนฟังก์ชั่นหายอดรวมรายการสั่งซื้อที่ จ่ายเงินแล้ว
// function totalPaidAmount(arr) {
//   let paidOrders = arr.filter(order => order.status === 'PAID');
//   return paidOrders.reduce((total, order) => total + (order.price * order.quantity), 0);
// }
// let input7 = [{status: 'PAID', name: 'Glory', price: 200, quantity: 3}, {status: 'PENDING', name: 'Glory', price: 200, quantity: 1}, {status: 'PAID', name: 'VitC', price: 150, quantity: 2}];
// let output7 = totalPaidAmount(input7);
// console.log(output7); // prints 900
const totalPaidAmount = (arr) => {
  const paidOrders = arr.filter(order => order.status === 'PAID');
  return paidOrders.reduce((total, order) => total + (order.price * order.quantity), 0);
}
const input7 = [{status: 'PAID', name: 'Glory', price: 200, quantity: 3}, {status: 'PENDING', name: 'Glory', price: 200, quantity: 1}, {status: 'PAID', name: 'VitC', price: 150, quantity: 2}];
const output7 = totalPaidAmount(input7);
console.log(output7); // prints 900
//มองทุกตัวคือตัวแปรคือ Function ของมัน เพราะฉะนั้นอะไรที่เริ่มต้นด้วย const หรือ let อันนั้นแหละคือ Function