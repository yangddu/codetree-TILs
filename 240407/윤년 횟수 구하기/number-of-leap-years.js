const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cntA = 0;
let cntB = 0;

for(let i = 1; i <= n; i++) {
    if (i % 100 === 0 && i % 400 !== 0) {
        cntB++;
    } else if (i % 4 === 0) {
        cntA++;
    }
}
console.log(cntA);