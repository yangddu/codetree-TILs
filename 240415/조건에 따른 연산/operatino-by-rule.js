const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 0;

while (true) {
    if (n % 2 === 0) {
        n = (3*n) + 1;
    } else {
        n = (2*n) + 2;
    }
    cnt++;

    if (n >= 1000) {
        console.log(cnt);
        break;
    }
}