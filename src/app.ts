class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee:string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, 
      'employee/s');
    console.log(this.employees);
  }
}


const accounting = new Department("Accounting");

accounting.addEmployee('Jim');
accounting.addEmployee('Tom');



accounting.printEmployeeInformation();
accounting.describe();


// accounting.describe();

// // const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
