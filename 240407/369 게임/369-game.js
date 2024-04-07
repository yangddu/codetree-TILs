const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let result = '';

for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) || (i % 6 === 0) || (i % 9 === 0) || (i % 3 === 0) || i.toString().includes(3) || i.toString().includes(6) || i.toString().includes(9)) {
        result += '0 ';
    } else {
        result += i + ' ';
    }
}
console.log(result);