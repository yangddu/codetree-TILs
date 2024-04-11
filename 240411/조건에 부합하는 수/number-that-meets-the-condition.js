const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);
let result = '';

for (let i = 1; i <= a; i++) {
    if ((i % 2 === 0 && i % 4 !== 0) || parseInt(i / 8) % 2 === 0 || i % 7 < 4) {
        continue;
    }
    result += i + ' ';
}
console.log(result);