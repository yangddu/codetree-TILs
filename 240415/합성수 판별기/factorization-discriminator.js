const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let result = false;

for (let i = 2; i <= (n -1); i ++) {
    if (n % i === 0) {
        result = true;
    }
}

if(result) {
    console.log('C');
} else {
    console.log('N');
}