const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;

for (let i = 1; i <= n; i ++) {
    if (i % 2 === 0 && i % 6 !== 0 && i % 12 !== 0) {
        cnt1++;
    } else if ((i % 3 === 0 || i % 6 === 0) && i % 12 !== 0) {
        cnt2++;
    } else if (i % 12 === 0) {
        cnt3++;
    }
}
console.log(cnt1, cnt2, cnt3);