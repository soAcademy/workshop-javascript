//JS Function Workshop

//1.
console.log("No1.");
//เขียนฟังก์ชั่นโดยใช้ .map แปลงค่าให้เป็นเลขยกกําลัง2
//input[1, 2, 3, 4]
//output[1, 4, 9, 16]
const inputNo1 = [1, 2, 3, 4];
const resultNo1 = inputNo1.map((r) => r ** 2);
console.log(resultNo1);

//2.
console.log("\nNo2.");
//เขียนฟังก์ชั่นโดยใช้ .map แปลงค่าให้เป็น name
//input[{id: 1, name: “A”},{id: 2, name: “B”}]
//output[“A”, “B”]

const inputNo2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const resultNo2 = inputNo2.map((r) => r.name);
console.log(resultNo2);

//3.
console.log("\nNo3.");
//เขียนฟังก์ชั่นโดยใช้ .filter หาเฉพาะเลขคี่
//input[1, 2, 3, 4, 5]
//output[1, 3, 5]

const inputNo3 = [1, 2, 3, 4, 5];
const resultNo3 = inputNo3.filter((r) => r % 2 !== 0);
console.log(resultNo3);

//4.
console.log("\nNo4.");
//เขียนฟังก์ชั่นโดยใช้ .filter หาข้อมูล tel = 0991112222
//input=[{id: 1, name: “A”, tel: “0818218888”},{id: 2, name: “B”, tel: “0991112222”}]
//output=[{id: 2, name: “B”, tel: “0991112222”}]

const inputNo4 = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "0991112222" },
];
const resultNo4 = inputNo4.filter((r) => r.tel === "0991112222");
console.log(resultNo4);

//5.
console.log("\nNo5.");
//เขียนฟังก์ชั่นโดยใช้ .sort เรียงเลขใน array จากน้อยไปมาก
//input=[3, 1, 2, 0]
//output=[0, 1, 2, 3]

const inputNo5 = [3, 1, 2, 0];
inputNo5.sort((a, b) => a - b);
console.log(inputNo5);

//6.
console.log("\nNo6.");
//เขียนฟังก์ชั่นโดยใช้ .sort เรียงค่า by id น้อยไปมาก
//input=[{id: 2, name: “B”},{id: 1, name: “A”}]
//output=[{id: 1, name: “A”},{id: 2, name: “B”}]

const inputNo6 = [
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];
inputNo6.sort((a, b) => a.id - b.id);
console.log(inputNo6);

//7.
console.log("\nNo7.");
//เขียนฟังก์ชั่นหาชื่อนักเรียนที่คะแนนน้อยกว่า 70 คะแนน
//input=[{name: “Bin”, score: 68},{name: “Jam”, score: 70},{name: “Nan”, score: 72},{name: “Ploy”, score: 65}]
//output=[“Bin”, “Ploy”]

const inputNo7 = [
  { name: "Bin", score: 68 },
  { name: "Jam", score: 70 },
  { name: "Nan", score: 72 },
  { name: "Ploy", score: 65 },
];
const resultNo7 = inputNo7.filter((r) => r.score < 70).map((r) => r.name);
console.log(resultNo7);

//8.
console.log("\nNo8.");
//ขียนฟังก์ชั่นหายอดรวมรายการสั่งซื้อที่ จ่ายเงินแล้ว
//input=[{status: 'PAID', name: 'Glory', price: 200, quantity: 3},{status: 'PENDING', name: 'Glory', price: 200, quantity: 1},{status: 'PAID', name: 'VitC', price: 150, quantity: 2}]
//output=900

inputNo8 = [
  { status: "PAID", name: "Glory", price: 200, quantity: 3 },
  { status: "PENDING", name: "Glory", price: 200, quantity: 1 },
  { status: "PAID", name: "VitC", price: 150, quantity: 2 },
];
resultNo8 = inputNo8.filter(r => r.status === "PAID").reduce((acc, r) => (acc + r.price * r.quantity),0);
console.log(resultNo8);
