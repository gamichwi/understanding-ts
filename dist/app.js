"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, 'employee/s');
        console.log(this.employees);
    }
}
const accounting = new Department("D1", "Accounting");
accounting.addEmployee('Jim');
accounting.addEmployee('Tom');
accounting.printEmployeeInformation();
accounting.describe();
