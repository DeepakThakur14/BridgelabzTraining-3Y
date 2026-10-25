"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;
const operation = "divide";

try {
    let result;

    if (!operations.includes(operation)) {
        throw new Error("InvalidOperationError: Unknown operation");
    }

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot calculate square root of a negative number");
            }
            result = Math.sqrt(num1);
            break;

        default:
            throw new Error("InvalidOperationError");
    }

    console.log(`
Calculator Summary
------------------
Operation: ${operation}
Number 1: ${num1}
Number 2: ${num2}
Result: ${result}
    `);
} catch (error) {
    console.log("Calculation Error:", error.message);
}