import Customer from "./Customer";

export async function searchCustomers() {
  let response = await fetch("/api/customers", {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  });

  return await response.json();
}

export async function searchCustomerById(id: string) {
  let customers = await searchCustomers();
  return customers.find((customer: Customer) => String(customer.id) === id);
}

export async function removeCustomer(id: string) {
  let customers = await searchCustomers();

  let indice = customers.findIndex(
    (customer: Customer) => String(customer.id) === id
  );
  customers.splice(indice, 1);
  localStorage["customers"] = JSON.stringify(customers);
}

export async function saveCustomer(customer: Customer) {
  let customers = await searchCustomers();

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
