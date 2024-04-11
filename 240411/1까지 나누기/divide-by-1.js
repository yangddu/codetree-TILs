const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 0;

for (let i = 1; i <= n; i++) {
    n = parseInt(n / i);
    if (n < i + 1) {
      cnt ++;
      break;
    }
    cnt ++;
}
console.log(cnt);