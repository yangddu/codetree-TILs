const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

if (input.length > 0) {
for (let i = 0; i < input.length; i ++) {
    if (Number(input[i]) % 2 === 1 && Number(input[i]) % 3 === 0) {
        console.log(Number(input[i]));
    }
}
}