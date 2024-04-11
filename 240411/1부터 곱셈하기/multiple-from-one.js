const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let sum = 1;

for (let i = 1; i <= 10; i++) {
    sum *= i;
    if (sum >= n) {
        console.log(i);
        break;
    }
}