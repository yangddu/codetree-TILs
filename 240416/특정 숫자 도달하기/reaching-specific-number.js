const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let sumVal = 0;
let cnt = 0;

for (let el of input) {
    if (Number(el) >=   250)
    break;
    sumVal += Number(el);
    cnt ++;
}
console.log(sumVal, (sumVal / cnt).toFixed(1));