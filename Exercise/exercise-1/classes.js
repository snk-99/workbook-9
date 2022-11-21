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
    "Netflix Software Dev",
    1_000_000

)

employee1.promote("Netflix Sr. Software Dev", 3_000_000);
console.log(`Job title: ${employee1.jobTitle}`);
console.log(`Pay rate: $${employee1.payRate}`);


let employee2 = new Employee(
    2,
    "Bedan",
    "Kahura",
    "petroleum engineer",
    3_000_000
)

employee2.promote("Sr.petroleum engineer", 7_000_000)
console.log(`Job title: ${employee2.jobTitle}`)
console.log(`Pay rate: $${employee2.payRate}`)

let employee1Intro = employee1.getIntro();
console.log(employee1Intro)

let employee2Intro = employee2.getIntro();
console.log(employee2Intro)
