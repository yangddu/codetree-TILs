const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let satisfied = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        satisfied = false;
    }
} 

if (satisfied) {
    console.log('P');
} else {
    console.log('C');
}