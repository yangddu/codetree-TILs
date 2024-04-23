const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let reverseArr = '';

for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] == 0) {
        reverseArr = '';
    } else {
        reverseArr += input[i] + ' ';
    }
}

console.log(reverseArr);