class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
  }
}

const it = new ITDepartment("D1", ["Jim"]);
console.log(it);

it.addEmployee("Jim");
it.addEmployee("Tom");

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string){
    if (name === 'Max'){
      return;
    }
    this.employees.push(name);
  }
}

it.printEmployeeInformation();
it.describe();



const accounting = new AccountingDepartment('d2', []);
console.log(accounting);
accounting.addReport('Yellow pages');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Gav');

accounting.printEmployeeInformation();