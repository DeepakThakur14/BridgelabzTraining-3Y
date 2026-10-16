let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

let summary = `
Student Scores: ${scores.map(score => score).join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents}
Students Failed: ${scores.length - passedStudents}
`;

console.log(summary);