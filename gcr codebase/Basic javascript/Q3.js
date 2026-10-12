let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;

total += total * 0.10;

console.log("Total Expenses: ₹" + (total / 1.10).toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Final Amount After 10% Tax: ₹" + total.toFixed(2));