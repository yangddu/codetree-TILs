const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let str = '';

for (let i = 1; i <= n; i++) {
    str = '';
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}