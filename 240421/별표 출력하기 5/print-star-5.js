const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = n; j > i; j--) {
        for (let k = n; k > i; k--) {
            str += '*';
        }
        str += ' ';
    }
    console.log(str);
}