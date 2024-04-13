const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 0;

while (true) {
    if (n % 2 === 0) {
        n /= 2;
    } else {
        n = (3 * n) + 1;
    }
    cnt ++;
    if (n === 1) {
        console.log(cnt);
        break;
    }
}