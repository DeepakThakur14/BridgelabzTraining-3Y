"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    'invalid',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const user = JSON.parse(rawData[i]);

        if (user.user === undefined || user.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(user.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        cleanData.push({
            user: user.user,
            age: age
        });
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });
    }
}

console.log("Valid Users:", cleanData);
console.log("Errors:", errors);

const under18 = cleanData.filter(user => user.age < 18);

console.log("Users Under 18:", under18);