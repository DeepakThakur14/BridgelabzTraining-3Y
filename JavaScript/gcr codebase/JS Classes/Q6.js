class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

const employees = [
    new Employee(1, "Deepak", "IT", 30000),
    new Employee(2, "Aman", "HR", 25000),
    new Employee(3, "Rahul", "Finance", 35000),
    new Employee(4, "Priya", "IT", 40000),
    new Employee(5, "Neha", "Marketing", 28000)
];

employees[0].applyBonus(10);

employees.forEach(employee => {
    console.log("ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Monthly Salary:", employee.salary);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("-------------------------");
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("Total Annual Payout: ₹" + totalAnnualPayout);