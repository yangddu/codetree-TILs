const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sum = 1;

for (let i = 1; i <= b; i ++) {
    if (i % a === 0) {
        sum *= i;
    }
}
console.log(sum);