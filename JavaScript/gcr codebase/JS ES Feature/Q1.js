"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Original Value: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: ${stringValue}`);

    if (
        value !== null &&
        value !== undefined &&
        String(value).trim() !== "" &&
        Number.isFinite(numberValue)
    ) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }

    console.log("------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);