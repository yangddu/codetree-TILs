const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let a = input[1].toString().trim().split(" ");
let val = 0;
let average = 0;

for (el of a) {
    val += Number(el);
}

average = (val / n).toFixed(1);
console.log(average);
if (average >= 4.0) {
    console.log('Perfect');
} else if (average >= 3.0) {
    console.log('Good');
} else {
    console.log('Poor');
}