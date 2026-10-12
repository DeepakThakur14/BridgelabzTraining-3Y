let userName = "Deepak";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Deepak", age: 20 };
let address = null;
let email;

let data = [
    { label: "User Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student Object", value: student, type: typeof student },
    { label: "Address", value: address, type: "null" },
    { label: "Email", value: email, type: typeof email }
];

console.table(data);