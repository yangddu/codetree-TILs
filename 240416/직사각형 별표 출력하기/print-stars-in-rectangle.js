const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let str = '';

for (let i = 0; i < a; i++) {
    str = '';
    for (let j = 0; j < b; j++) {
        str += '* ';
    }
    console.log(str);
}