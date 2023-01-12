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

// const convertCsvToObject = (csvData) => {
//   const rows = csvData.split("\n");
//   const fieldName = rows[0].split(",");
//   const datas = rows.splice(1, rows.length - 1);
//   // console.log(datas);
//   const result = datas.map((data) => {
//     const fieldValues = data.split(",");
//     // console.log(fieldValues);
//     return fieldName.map((key, idx) => ({
//       [key]: fieldValues[idx],
//     }));
//   });
//   return result;
// };

// console.log("Q1: ", convertCsvToObject(csvData));

const q1 = (csvData) => {
  const rows = csvData.split("\n");
  const fieldName = rows[0].split(",");
  const datas = rows.splice(1, rows.length - 1);
  // console.log(datas);
  // console.log(rows);
  const result = datas.map((data) => {
    const fieldData = data.split(",");
    // console.log(fieldData)
    return fieldName.map((head, value) => ({
      [head]: fieldData[value],
    }));
  });
  return result;
  // return rows;
};

console.log(q1(csvData));
