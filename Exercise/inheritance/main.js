class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person1 = new Person(
    "Samuel",
    "Kahura"
)

console.log(person1.getFullName())

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, PayRate) {
        super(firstName, lastName);

        this.id = id;
        this.jobTitle = jobTitle;
        this.PayRate = PayRate;
    }


}

let employee = new Employee(
    "Bedan",
    "Kahura",
    1,
    "Web Dev",
    46.75
)

console.log(employee.getFullName())







