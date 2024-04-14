const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 1;
let prod = 2;

while (true) {
    if (prod === n) {
        break;
    }

    prod *= 2;
    cnt++;
}
console.log(cnt);