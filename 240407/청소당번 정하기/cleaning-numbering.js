const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cntA = 0, cntB = 0, cntC = 0;

for (let i = 1; i <= n; i ++) {
    if (i % 12 === 0) {
        cntC++;
    } else if (i % 3 === 0) {
        cntB++;
    } else if (i % 2 === 0) {
        cntA++;
    }
}
console.log(cntA, cntB, cntC);