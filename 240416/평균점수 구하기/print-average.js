const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 0;

for (el of input) {
    sum += Number(el);
}
let average = (sum / input.length).toFixed(1);
console.log(average);