const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

let a = (n % 2 === 1) && (n % 3 === 0);
let b = (n % 2 === 0) && (n % 5 === 0);

if (a || b) console.log('true');
else console.log('false');