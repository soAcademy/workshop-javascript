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

const convertCsvToObject = (csvData) => {
  const rows = csvData.split("\n"); // split the string into an array of rows
  console.log(rows);
  const fieldName = rows[0].split(","); //split the first row into an array using the "," delimiter.
  console.log(fieldName);
  const datas = rows.splice(1, rows.length - 1); //removes the first row, which is the field name, from the rows array using the splice method.
  console.log(datas);
  const result = datas.map((data) => {
    //uses the map method to loop through the remaining rows, and for each row, it splits the row into an array of field values using the "," delimiter.
    const fieldValues = data.split(",");
    console.log(fieldValues);
    return fieldName.map((key, idx) => ({
      //maps the field names array to an object by creating a new object for each field name and value pair, and returns the resulting array of objects.
      [key]: fieldValues[idx],
    }));
  });
  return result;
};

console.log("Q1: ", convertCsvToObject(csvData));
