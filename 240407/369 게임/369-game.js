const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let result = '';

for (let i = 1; i <= n; i++) {
    if ((i % 10 === 3) || (i % 10 === 6) || (i % 10 === 9) || (i % 3 === 0) || (parseInt((parseInt(i / 3)) / 10) === 1) || (parseInt((parseInt(i / 6)) / 10) === 1) || (parseInt((parseInt(i / 9)) / 10) === 1)) {
        result += '0 ';
    } else {
        result += i + ' ';
    }
}
console.log(result);