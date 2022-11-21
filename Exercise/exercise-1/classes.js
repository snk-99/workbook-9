class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
        return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`
    }
}

let employee1 = new Employee(
    1,
    "Samuel",
    "Kahura",
    "Netflix Sr. Software Dev",
    "3_000_000"
)

let employee2 = new Employee(
    2,
    "Bedan",
    "Kahura",
    "petroleum engineer",
    "5_000_000"
)


let employee1Intro = employee1.getIntro();
console.log(employee1Intro)

let employee2Intro = employee2.getIntro();
console.log(employee2Intro)
