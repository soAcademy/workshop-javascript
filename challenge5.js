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

// เฉลยของอาจารย์บิน
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

// อันนี้ที่ทำตอนแรก แต่ผลที่ได้คือมันขึ้นเป็นแถวเดียวกันเลยไม่เอา
// const rows = csvData.split('\n');
// const headers = rows[0].split(',');
// const data = rows.slice(1).map(row => {
//     const values = row.split(',');
//     return headers.reduce((obj, header, index) => {
//         obj[header] = values[index];
//         return obj;
//     }, {});
// });
// console.log(data);

const rows = csvData.split('\n');
const headers = rows[0].split(',');
const data = rows.slice(1).map(row => {
    const values = row.split(',');
    return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
    }, {});
});

data.forEach(obj => {
    console.log(JSON.stringify(obj, null, 2));
});