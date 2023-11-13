
//   // Your CSV data
//   const csvData = `Name,Age,Location
//     Alice,25,New York
//     Bob,30,Los Angeles
//     Charlie,22,Chicago`;

//   // Parse the CSV data
//   Papa.parse(csvData, {
//     header: true, // Treat the first row as headers
//     complete: function(results) {
//       // The parsed data is available as a JavaScript object
//       const jsObject = results.data;
//       console.log(jsObject);
//     }
//   });



fetch('csv/test_2.csv')
  .then(response => response.text())
  .then(csvData => {
    Papa.parse(csvData, {
      header: true,
      complete: function (results) {
        const jsObject = results.data;
        console.log(jsObject);
        // You can work with the parsed data here
      },
      error: function (error) {
        console.error('CSV parsing error:', error);
      }
    });
  })
  .catch(error => {
    console.error('File fetch error:', error);
  });