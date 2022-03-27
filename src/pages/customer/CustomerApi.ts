import Customer from "./Customer";

export function searchCustomers() {
  if (!localStorage["customers"]) {
    localStorage["customers"] = "[]";
  }

  let customers = localStorage["customers"];
  customers = JSON.parse(customers);
  return customers;
}

export function searchCustomerById(id: string) {
  let customers = searchCustomers();
  return customers.find((customer: Customer) => String(customer.id) === id);
}

export function removeCustomer(id: string) {
  let customers = searchCustomers();

  let indice = customers.findIndex(
    (customer: Customer) => String(customer.id) === id
  );
  customers.splice(indice, 1);
  localStorage["customers"] = JSON.stringify(customers);
}

export function saveCustomer(customer: Customer) {
  let customers = searchCustomers();

  if (customer.id) {
    let indice = customers.findIndex(
      (currentCustomer: Customer) =>
        String(currentCustomer.id) === String(customer.id)
    );
    customers[indice] = customer;
  } else {
    customer.id = String(Math.round(Math.random() * 1000000));
    customers.push(customer);
  }
  localStorage["customers"] = JSON.stringify(customers);
}
