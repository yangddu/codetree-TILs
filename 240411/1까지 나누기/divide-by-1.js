const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 1;

for (let i = 1; i <= n; i++) {
    let a = parseInt(n / i);
    n = a;
    cnt ++;
    if (n <= 1) {
        break;
    }
}
console.log(cnt);