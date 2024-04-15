const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let result = true;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 !== 0) {
        result = false;
    }
}

if (result) {
    console.log(1);
} else {
    console.log(0);
}