const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'text.txt');

fs.readFile(fileName, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
