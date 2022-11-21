class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    
    getPayRate() {
        return this.payRate
    }

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
    getIntro() {
        return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`
    }
}

let employee = new Employee(
    1,
    "Samuel",
    "Kahura",
    "Netflix Sr. Software Dev",
    "3_000_000"
)

console.log(employee.getFullName());
console.log(employee.getPayRate());


let intro = employee.getIntro();
console.log(intro)