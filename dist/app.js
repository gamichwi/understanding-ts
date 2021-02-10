"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, 'employee/s');
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee('Jim');
accounting.addEmployee('Tom');
accounting.printEmployeeInformation();
accounting.describe();
