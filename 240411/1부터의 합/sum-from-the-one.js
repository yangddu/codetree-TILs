const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let sum = 0;
let prod = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (sum >= n) {
        break;
    }
    prod += i;
}
console.log(prod);