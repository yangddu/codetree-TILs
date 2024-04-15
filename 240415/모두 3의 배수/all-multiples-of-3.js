const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let result = false;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        result = true; 
    }
}

if (result) {
    console.log(1);
} else {
    console.log(0);
}