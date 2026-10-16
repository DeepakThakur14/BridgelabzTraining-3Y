let bonus = 5000;

function calculateSalary() {
    let salary = 30000;
    let isPermanent = true;
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log("Base Salary:", salary);
    console.log("Bonus:", isPermanent ? bonus : 0);
    console.log("Total Salary:", totalSalary);
}

calculateSalary();