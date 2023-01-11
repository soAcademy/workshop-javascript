const array = [1, 2, 3, 4];
const doubles = array.map((r) => r ** 2);
console.log(doubles);




const array2 = [{id: 1, name: "A"},{id: 2, name: "B"}];
const shifts = array2.map((r) => (r.name));
console.log(shifts);




const array3 = [1, 2, 3, 4, 5];
const evens = array3.filter((r) => r % 2 === 1);
console.log(evens);




const array4 = [{id: 1, name: "A", tel:"0818218888"},{id: 2, name: "B", tel:"0991112222"}]
const x = array4.filter((r) => r.tel === "0991112222");
console.log(x);




const array5 = (input) => {
const output = input.sort();
// console.log(output);
return output
}

let por = [3, 1, 2, 0];
let soon = array5(por)
console.log(soon);
      




const array6 = [{id: 2, name: "B"},{id: 1, name: "A"}];
array6.sort((a, b) => a.id - b.id);
console.log(array6);





const array7 = (input) => {
  const output1 = input.filter(r => r.score < 70);
    const output2 = output1.map(r => r.name);
    return output2
    // console.log(output2);
    }
    let opi = [{name: "Bin", score: 68},
      {name: "Jam", score: 70},
      {name: "Nan", score: 72},
      {name: "Ploy", score: 65}]
      
      let book = array7(opi)
      console.log(book)





const array8 = (input) => {
// console.log(input)
const sum = input.reduce((acc, order) => {
if (order.status === 'PAID') {
return acc += (order.price * order.quantity);
}
return acc;
}, 0);
// console.log(sum);
return sum 
}

let op = [
  {status: 'PAID', name: 'Glory',
  price: 200, quantity: 3},
  {status: 'PENDING', name:
  'Glory', price: 200, quantity: 1},
  {status: 'PAID', name: 'VitC',
  price: 150, quantity: 2}
  ]
let fog = array8(op)
console.log(fog)




