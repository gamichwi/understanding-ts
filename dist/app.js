"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, "employee/s");
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('It Department', this.id);
    }
}
const it = new ITDepartment("D1", ["Jim"]);
console.log(it);
it.addEmployee("Jim");
it.addEmployee("Tom");
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass a value");
        }
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee("Jennifer");
console.log("employee", employee1, "from", Department.fiscalYear);
it.printEmployeeInformation();
it.describe();
const accounting = new AccountingDepartment("d2", []);
console.log(accounting);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Yellow pages");
console.log("Last Report", accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Gav");
accounting.describe();
