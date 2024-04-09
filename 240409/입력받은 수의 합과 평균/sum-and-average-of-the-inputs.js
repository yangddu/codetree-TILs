const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let sum = 0;

for (let i = 1; i <= Number(input[0]); i++) {
    sum += Number(input[i]);
}
console.log(sum, (sum / Number(input[0])).toFixed(1));