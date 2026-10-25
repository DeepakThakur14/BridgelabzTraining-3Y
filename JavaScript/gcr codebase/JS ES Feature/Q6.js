const prompt = require("prompt-sync")();

let rows = Number(prompt("Enter number of rows (default 5): "));

if (!Number.isInteger(rows) || rows <= 0) {
    rows = 5;
}

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}