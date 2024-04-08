const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let sum = 0;

for (let i = n; i <= 100; i++) {
    sum += i;
}
console.log(sum);