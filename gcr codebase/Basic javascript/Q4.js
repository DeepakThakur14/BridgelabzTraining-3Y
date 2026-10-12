let marks = [85, 90, 78, 92, 88];

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (marks.some(mark => mark < 35) || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}