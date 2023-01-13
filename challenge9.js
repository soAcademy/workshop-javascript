// Q1: Calculate fibbonacci using reduce
// 0 1 1 2 3 5 8 13 21
console.log("test::", [...Array(5).keys()]);
const fib = (n) =>
  [...Array(n - 1).keys()].reduce(
    (acc, _r) => {
      // first round
      const vt = acc.v1; // สร้างตัวแปรมา copy ค่า v1 เอาไว้
      acc.v1 = acc.v1 + acc.v0; // ทำการบวกเลขก่อนหน้า 2 ตัว เพื่อหาเลขตัวถัดไป แล้วเอาเก็บไว้ที่ตัวนับ v1
      acc.v0 = vt; // แทนค่าคืนกลับไปที่ v0
      return acc;
    },
    { v0: 0, v1: 1 }
    // { v0: 1, v1: 1 } first round
    // { v0: 1, v1: 2 } second round
    // { v0: 2, v1: 3 } third round
    // { v0: 3, v1: 5 } fourth round
    // { v0: 5, v1: 8 } fifth round
    //n-1
    // { v0: 8, v1: 13 } sixth round
  ).v1;

// 8
console.log(fib(6));

// f(n) = f(n-1) + f(n-2) when f(0) = 0, f(1) = 1
// const f = (n) => (n === 0 ? 0 : n === 1 ? 1 : f(n - 1) + f(n - 2));
// console.log(f(6));

// Q2: Calculate fibbonacci series using reduce

const fibSeries = (n) =>
  [...Array(n - 1).keys()].reduce(
    (acc, _r) => {
      acc = [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
      // acc = [0,1,1];
      return acc;
    },
    [0, 1]
  );

console.log(fibSeries(7));
