// const BMI = (weight, height) => {
//   return (grade =
//     BMI < 18.5
//       ? "underweight"
//       : BMI < 25
//       ? "healthy"
//       : BMI < 30
//       ? "overweight"
//       : "obesity");
// };
// console.log(BMI(76, 190));

// //(conditon)?ture:false

// const gradeCalculation = (score) => {
//   return (grade =
//     score >= 80
//       ? "A"
//       : (70 < score) & (score < 80)
//       ? "B"
//       : (50 < score) & (score < 60)
//       ? "C"
//       : "D");
// };
// console.log(gradeCalculation(40));

// //การบ้าน
// data = [
//   {
//     id: 1,
//     customer: "John Doe",
//     items: [
//       {productId: 1,quantity: 2,},
//       {productId: 2,quantity: 1,},
//     ],
//     datetime: "2022-12-15T12:00:00Z",
//   },
//   {
//     id: 2,
//     customer: "Jane Smith",
//     items: [
//       {productId: 3,quantity: 3,},
//     ],
//     datetime: "2022-12-14T12:00:00Z",
//   },
//   {
//     id: 3,
//     customer: "Bob Johnson",
//     items: [
//       {productId: 1,quantity: 1,},
//     ],
//     datetime: "2022-12-13T12:00:00Z",
//   },
//   {
//     id: 4,
//     customer: "John Doe",
//     items: [
//       {productId: 2,quantity: 2,},
//       {productId: 3,quantity: 1,},
//     ],
//     datetime: "2022-12-13T11:00:00Z",
//   },
// ];
//console.log(data[3].items.length);  หาว่า item length มีกี่ตัว
// /*
// console.log(data[3].items[1].productId);
// function concludeOrder(inputs){
//   for(let i=0; i<inputs.length; i++){
//     // i = 0 วนลูป item 
//     for(let j=0; j<inputs[i].items.length; j++){
//       let x = inputs[i].items[j].productId
//       console.log(`id${i+1} productId: ${inputs[i].items[j].productId}`);
//     }
//     //x = inputs[i].items[0].productId ;

//     //console.log(i); 
//     //console.log(`id${i+1} productId: ${inputs[i].items[j].productId}`); //value ของ productId = inputs[i].items[0].productId
    
//   }
//   //return x;
// }
// const ans = concludeOrder(data);
// //console.log(ans);
// //console.log(data.length);

hobbies = 
[
  'reading',   'hiking',
  'swimming',  'cooking',
  'dancing',   'traveling',
  'cycling',   'painting',
  'swimming',  'reading',
  'gardening'
]
console.log(Object.entries(hobbies));


