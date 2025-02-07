import React from "react";

class Employee {
  constructor(
    private name: string,
    private salary: number,
    public position: string,
    protected department: string
  ) {}
  getEmployeeInfo(): string {
    return `Name: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department}`;
  }
}

const Exercise1 = () => {
  const employee = new Employee("Samuel", 5000, "intern", "computing");
  const employeeInfo = employee.getEmployeeInfo();

  return (
    <div>
      <h1>Employee details</h1>
      <h3>{employeeInfo}</h3>
    </div>
  );
};

export default Exercise1;
