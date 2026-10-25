"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
    { id: 4, amount: 1500 }
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null || transaction === undefined) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("Missing amount or ID");
        }

        if (typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)) {
            throw new Error("Invalid amount");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({
            index: i,
            error: error.message
        });

        console.log(`Transaction at index ${i} failed: ${error.message}`);
    }
}

console.log("\nValid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Transactions:", valid.length);
console.log("Failed Transactions:", invalid.length);