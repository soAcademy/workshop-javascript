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

const csvToObject = (csvData) => {
  csvData = csvData.split("\n");
  csvData.splice(0, 1);
  csvData = csvData.reduce((acc, e) => {
    e = e.split(",");
    acc[e[0].toString()] = {
      id: e[0],
      name: e[1],
      orderValue: e[2],
      orderDate: e[3],
    };
    return acc;
  }, {});
  return Object.values(csvData);
};

//using [key],[idx]
// const csvToObject = (csvData) => {
//   csvData = csvData.split("\n");
//   colName = csvData[0].split(',');
//   csvData = csvData.splice(1,)
//   const result = csvData.map((e) => {
//     const row = e.split(',')
//     csvData = colName.map((key, idx) => ({
//       [key]: row[idx],
//     }));
//     return csvData
//   });
//   return result;
// };
console.log(csvToObject(csvData));
