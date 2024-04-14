const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 1;

while (true) {
    let val = 2 * cnt;
    cnt++;
    if (val < n) {
        break;
    }
}
console.log(cnt);