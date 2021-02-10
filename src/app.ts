class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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


const accounting = new Department("D1", "Accounting");

accounting.addEmployee('Jim');
accounting.addEmployee('Tom');



accounting.printEmployeeInformation();
accounting.describe();


// accounting.describe();

// // const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
