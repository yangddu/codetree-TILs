const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let result = a + ' ';

for (let i = a; i < b;) {
    if (i % 2 === 0) {
        i += 3;
        result += i + ' ';
    } else {
        i *= 2;
        result += i + ' ';
    }
}
console.log(result);