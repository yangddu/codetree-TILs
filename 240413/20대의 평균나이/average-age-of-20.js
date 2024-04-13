const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let cnt = 0;
let sum = 0;

while (true) {
    let n = Number(input[index]);
    index++;
    if (n < 30) {
        sum += n;
        cnt++;
    } else {
        break;
    }
}
console.log((sum / cnt).toFixed(2));