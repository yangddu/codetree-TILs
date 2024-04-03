const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a >= 90 && b >= 95) {
    console.log(10);
} else if (a >= 90 && b >= 90) {
    console.log(5);
} else {
    console.log(0);
}