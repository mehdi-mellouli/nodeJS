const fs = require ('fs');
fs.writeFileSync('welcome.txt','Hello Node!!');
const data = fs.readFileSync('welcome.txt').toString();
console.log(data);