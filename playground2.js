//Quiz1
const double = (input) => {
  const output = input.map((r) => r ** 2);
  console.log(output);
};
double([1, 2, 3, 4]);
//quiz2

const customers = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const findName = (input) => {
  const name = input.map((r) => {
    return r.name;
  });
  console.log(name);
};
findName(customers);

//quiz3
const number = [1, 2, 3, 4, 5];
const findOdd = (input) => {
  const filterOdd = input.filter((r) => r % 2 !== 0);
  console.log(filterOdd);
};
findOdd(number);

//quiz4
const database = [
  { id: 1, name: "A", tel: "0818218888" },
  { id: 2, name: "B", tel: "099112222" },
];
const findId = (input) => {
  const findId2 = input.filter((r) => r.tel === "099112222");
  console.log(findId2);
};
findId(database);

//quiz5
const number2 = [3, 1, 2, 0];
const arrNumber = (input) => {
  const arrangeNumber = number2.sort((a, b) => a - b);
  console.log(arrangeNumber);
};
arrNumber(number2);

//quiz6
const number3 = [
  {
    id: 2,
    name: "B",
  },
  {
    id: 1,
    name: "A",
  },
];
const arrId = (input) => {
  const arrangeId = input.sort((a, b) => a.id - b.id);
  console.log(arrangeId);
};
arrId(number3);

//quiz7
const students = [
  {
    name: "Bin",
    score: 68,
  },
  {
    name: "Jam",
    score: 70,
  },
  {
    name: "Nan",
    score: 72,
  },
  {
    name: "Ploy",
    score: 65,
  },
];
const gradeFind = (input) => {
  const findGrade = input.filter((r) => r.score < 70).map((r) => r.name);
  console.log(findGrade);
};
gradeFind(students);

//quiz8
const listItems = [
  {
    status: "PAID",
    name: "Glory",
    price: 200,
    quantity: 3,
  },
  {
    status: "PENDING",
    name: "Glory",
    price: 200,
    quantity: 1,
  },
  {
    status: "PAID",
    name: "VitC",
    price: 150,
    quantity: 2,
  },
];
const totalSales = (inputs) => {
  const totalPrice = inputs.reduce((acc, order) => {
    if (order.status === "PAID") {
       acc = acc + order.price * order.quantity;
    }
    return acc;
    
  },0);

  console.log(JSON.stringify(totalPrice));
};
totalSales(listItems);
