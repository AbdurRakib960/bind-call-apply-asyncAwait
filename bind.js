const persons = {
    firstName: "Abdur",
    lastName: "Rakib",
    salary: 3000,
    getFullName: () => {
        this.firstName + this.lastName
        console.log(this.firstName,this.lastName)
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - amount - tips - tax;
        return this.salary
    }
}

const person1 = {
    firstName: "Michel",
    lastName: "Jackson",
    salary: 32000

}

const person2 = {
    firstName: "Shakib",
    lastName: "Hasan",
    salary: 20000
}


const person3 = {
    firstName: "Tammim",
    lastName: "Iqbal",
    salary: 32000
}

// // (bind) chargeBill method  for person1 
const person1ChargeBill = persons.chargeBill.bind(person1);
person1ChargeBill(2000);
console.log(person1.salary);

// // (bind)  chargeBill method  for person2

const person2ChargeBill = persons.chargeBill.bind(person2);
person2ChargeBill(1000);
console.log(person2.salary);

// //  (bind) chargeBill method  for person3

const person3ChargeBill = persons.chargeBill.bind(person3);
person3ChargeBill(5000);
console.log(person3.salary);

// using call

// (call) chargeBill method for person1 

persons.chargeBill.call(person1, 2000, 500, 100);
persons.chargeBill.call(person1, 1000, 100, 10);
console.log(person1.salary)

// // (call) chargeBill method for person2

persons.chargeBill.call(person2, 2500, 400, 20);
console.log(person2.salary)


// using apply

// (apply) chargeBill method for person2

persons.chargeBill.apply(person2, [2000, 600, 50]);
persons.chargeBill.apply(person2, [1000, 200, 20]);
console.log(person2.salary)

// (apply) chargeBill method for person3

persons.chargeBill.apply(person3, [5000, 1000, 100]);
console.log(person3.salary)
