const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let sum = 0;
let length = 0;

for (let i = a; i <= b; i ++) {
    if (i % 5 === 0 || i % 7 === 0) {
        length += 1;
        sum += i;
    }
}
console.log(`${sum} ${(sum / length).toFixed(1)}`)