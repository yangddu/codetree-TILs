const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;

while (true) {
    let arr = input[index].split(" ");
    let x = Number(arr[0]);
    let y = Number(arr[1]);
    let c = arr[2];

    index++;
    console.log(x * y);
    if (c === 'C') {
        break;
    }
}