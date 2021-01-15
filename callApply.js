const normalPerson = {
    firstName: 'Tomas',
    lastName: 'Alva',
    salary: 15000,
    
    getFullName: () => {
        this.firstName + this.lastName
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary
    }
}

console.log(normalPerson.lastName);

normalPerson.chargeBill(500);
console.log(normalPerson.salary)

