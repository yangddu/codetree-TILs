const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 0;
let cnt = 0;

for (let el of input) {
    if (Number(el) !== 0 && Number(el) % 2 === 0) {
        sum += Number(el);
        cnt++;
    } else if (Number(el) === 0) {
        break;
    }
}
console.log(cnt, sum);