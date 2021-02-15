abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, "employee/s");
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //overrides the method
  describe() {
    console.log('Accounting Department - ID:' + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
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
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
