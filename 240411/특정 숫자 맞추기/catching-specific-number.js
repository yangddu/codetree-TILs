const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let n;

while (true) {
    n = Number(input[index])
    if (n === 25) {
        console.log('Good');
        break;
    } else if (n < 25) {
        console.log ('Higher');
    } else {
        console.log('Lower');
    }
    index++;
}