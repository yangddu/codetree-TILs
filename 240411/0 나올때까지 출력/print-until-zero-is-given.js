const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let n;

while (true) {
    n = Number(input[index]);
    if (n === 0) {
        break;
    }
    index++;
    console.log(n);
}