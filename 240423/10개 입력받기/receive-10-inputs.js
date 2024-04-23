const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 0;
let cnt = 0;

for (let el of input) {
    if (Number(el) !== 0) {
        sum += Number(el);
        cnt ++;
    } else {
        break;
    }
}
console.log(sum, (sum/cnt).toFixed(1));