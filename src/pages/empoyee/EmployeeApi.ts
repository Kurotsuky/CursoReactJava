import Employee from "./Employee";

export function searchEmployees() {
  if (!localStorage["employees"]) {
    localStorage["employees"] = "[]";
  }

  let employees = localStorage["employees"];
  employees = JSON.parse(employees);
  return employees;
}

export function searchEmployeeById(id: string) {
  let employees = searchEmployees();
  return employees.find((employee: Employee) => String(employee.id) === id);
}

export function removeEmployee(id: string) {
  let employees = searchEmployees();

  let indice = employees.findIndex(
    (employee: Employee) => String(employee.id) === id
  );
  employees.splice(indice, 1);
  localStorage["employees"] = JSON.stringify(employees);
}

export function saveEmployee(employee: Employee) {
  let employees = searchEmployees();

  if (employee.id) {
    let indice = employees.findIndex(
      (currentEmployee: Employee) =>
        String(currentEmployee.id) === String(employee.id)
    );
    employees[indice] = employee;
  } else {
    employee.id = String(Math.round(Math.random() * 1000000));
    employees.push(employee);
  }
  localStorage["employees"] = JSON.stringify(employees);
}
