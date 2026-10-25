function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

const student1 = new Student("Deepak", "Computer Science");

student1.showName();
student1.showBranch();

console.log("Prototype inheritance:", student1 instanceof Person);


class PersonES6 {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class StudentES6 extends PersonES6 {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

const student2 = new StudentES6("Deepak", "Computer Science");

student2.showName();
student2.showBranch();

console.log("Class inheritance:", student2 instanceof PersonES6);
