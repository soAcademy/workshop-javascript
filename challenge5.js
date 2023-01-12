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

const convertCsvToObject = (csv) => {
  const rows = csv.split("\n");

  const keys = rows.shift().split(",");

  const convertedObject = rows.reduce((acc, row) => {
    const values = row.split(",");
    const zippedKeyValuePairs = keys.map((key, index) => [key, values[index]]);
    acc[values[0]] = Object.fromEntries(zippedKeyValuePairs);
    return acc;
  }, {});

  return Object.values(convertedObject);
};

console.log("Q1: ", JSON.stringify(convertCsvToObject(csvData)));
