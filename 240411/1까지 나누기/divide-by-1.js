const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let cnt = 1;

for (let i = 1; i <= n; i++) {
    n = parseInt(n / i);
    if (n <= 1) {
        break;
    }
    cnt++;
}
console.log(cnt);

// for (let i = 1; i <= n; i++) {
//     let a = parseInt(n / i);
//     n = a;
//     if (n <= 1) {
//         break;
//     }
//   cnt++;
// }
// console.log(cnt);