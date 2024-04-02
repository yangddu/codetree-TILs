const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

let i = 3;
let result = '';

while (i <= a) {
    result += i + ' '; 
    i += 3;    
}
console.log(result);