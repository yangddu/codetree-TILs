const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < i * 2 + 1; j++) {
        str += '*';
    }
    console.log(str);
}