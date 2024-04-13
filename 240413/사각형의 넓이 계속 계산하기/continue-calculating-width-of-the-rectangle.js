const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    let arr = input[i].toString().trim().split(" ");
    console.log(arr[0] * arr[1]);
}