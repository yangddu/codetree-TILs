const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sum = 1;

for (let i = a; i <= b; i ++) {
    sum *= i;
}
console.log(sum);