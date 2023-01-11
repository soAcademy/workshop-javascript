function toPowerOfTwo(arr) {
  return arr.map(val => val ** 2);
}
let input = [1, 2, 3, 4];
let output = toPowerOfTwo(input);
console.log(output); // prints [1, 4, 9, 16]


function convertToName(arr) {
  return arr.map(obj => obj.name);
}
let input1 = [{id: 1, name: "A"}, {id: 2, name: "B"}];
let output1 = convertToName(input1);
console.log(output1); // prints ["A", "B"]


function findOddNumbers(arr) {
  return arr.filter(val => val % 2 !== 0);
}
let input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output2 = findOddNumbers(input2);
console.log(output2); // prints [1, 3, 5, 7, 9]


function findByTel(arr, tel) {
  return arr.filter(obj => obj.tel === tel);
}
let input3 = [{id: 1, name: "A", tel: "0818218888"}, {id: 2, name: "B", tel: "0991112222"}];
let output3 = findByTel(input3, "0991112222");
console.log(output3); // prints [{id: 2, name: "B", tel: "0991112222"}]


function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}
let input4 = [2, 4, 8, 10, 9, 6];
let output4 = sortAscending(input4);
console.log(output4); // prints [2, 4, 6, 8, 9, 10]


function sortByIdAsc(arr) {
  return arr.sort((a, b) => a.id - b.id);
}
let input5 = [{id: 2, name: "B"}, {id: 1, name: "A"}];
let output5 = sortByIdAsc(input5);
console.log(output5); // prints [{id: 1, name: "A"}, {id: 2, name: "B"}]


function findStudentWithScoreBelow70(arr) {
  return arr.filter(student => student.score < 70).map(student => student.name);
}
let input6 = [{name: "Bin", score: 68}, {name: "Jam", score: 70}, {name: "Nan", score: 72}, {name: "Ploy", score: 65}];
let output6 = findStudentWithScoreBelow70(input6);
console.log(output6); // prints ["Bin", "Ploy"]


function totalPaidAmount(arr) {
  let paidOrders = arr.filter(order => order.status === 'PAID');
  return paidOrders.reduce((total, order) => total + (order.price * order.quantity), 0);
}
let input7 = [{status: 'PAID', name: 'Glory', price: 200, quantity: 3}, {status: 'PENDING', name: 'Glory', price: 200, quantity: 1}, {status: 'PAID', name: 'VitC', price: 150, quantity: 2}];
let output7 = totalPaidAmount(input7);
console.log(output7); // prints 900