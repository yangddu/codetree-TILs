const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let cnt = 0;

while (true) {
    let n = Number(input[index]);
    index ++;
    if (n % 2 === 0) {
        console.log(n /= 2);
        cnt++;
    } else {
        continue;
    }
    if (cnt >= 3) {
        break;
    }
}