const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

answer = a;
for (let i = 0; i < b; i ++ ) {
    answer += b;
    console.log(answer);
}