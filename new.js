class person {
    constructor(firstname, lastname, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 25000);

console.log(heroPerson);

const friendlyPerson = new person('Kalam', 'Ahmed', 30000);

console.log(friendlyPerson);