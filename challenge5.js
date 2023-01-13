const csvData = `id,name,orderValue,orderDate
1,Bin,1340,14/01/2023
2,Jam,250,14/01/2023
3,Ploy,350,14/01/2023
4,Bin,950,15/01/2023
5,Jam,850,15/01/2023`;

// Quiz 1: convert csvData to object like these
// [
//   {
//     id: 1,
//     name: 'Bin',
//     orderValue: 1340,
//     orderDate: "14/01/2023"
//   }
// ]

const splitCsv = csvData.split('\n');
const headers = splitCsv[0].split(',');
// console.log(splitCsv);
console.log(headers);
const datas = splitCsv.splice(1,splitCsv.length - 1);
// console.log(datas);
const newDataAligned = datas.map(data => {
  // console.log(data);
  const eachData = data.split(',');
  
  const result = headers.map((header,index) => {
    // console.log(header);
    return { [header]: eachData[index] };
  })
  return result;
});

console.log(newDataAligned);

// const convertCsvToObject = (csvData) => {
//   const rows = csvData.split("\n");
//   const fieldName = rows[0].split(",");
//   const datas = rows.splice(1, rows.length - 1);
//   const result = datas.map((data) => {
//     const fieldValues = data.split(",");
//     return fieldName.map((key, idx) => ({
//       [key]: fieldValues[idx],
//     }));
//   });
//   return result;
// };

// console.log("Q1: ", convertCsvToObject(csvData));
