const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let result = '';

while (n >= 1) {
    result += n + ' ';
    n--;
}
console.log(result);