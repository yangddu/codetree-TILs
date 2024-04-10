const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sum = a;


for (let i = 1; i <= b; i ++) {
    sum += i * a;
}
console.log(sum)