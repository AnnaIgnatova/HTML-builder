const fs = require('fs');
const path = require('path');
const readline = require('readline');

let fileName = path.join(__dirname, 'text.txt');
let writeStream = fs.createWriteStream(fileName);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('You can type something:\n');

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  } else {
    writeStream.write(input + '\n');
  }
});

process.on('exit', () => console.log('\nGood luck!'));
