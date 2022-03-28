import Supplier from "./Supplier";

export function searchSuppliers() {
  if (!localStorage["suppliers"]) {
    localStorage["suppliers"] = "[]";
  }

  let suppliers = localStorage["suppliers"];
  suppliers = JSON.parse(suppliers);
  return suppliers;
}

export function searchSupplierById(id: string) {
  let suppliers = searchSuppliers();
  return suppliers.find((supplier: Supplier) => String(supplier.id) === id);
}

export function removeSupplier(id: string) {
  let suppliers = searchSuppliers();

  let indice = suppliers.findIndex(
    (supplier: Supplier) => String(supplier.id) === id
  );
  suppliers.splice(indice, 1);
  localStorage["suppliers"] = JSON.stringify(suppliers);
}

export function saveSupplier(supplier: Supplier) {
  let suppliers = searchSuppliers();

  if (supplier.id) {
    let indice = suppliers.findIndex(
      (currentSupplier: Supplier) =>
        String(currentSupplier.id) === String(supplier.id)
    );
    suppliers[indice] = supplier;
  } else {
    supplier.id = String(Math.round(Math.random() * 1000000));
    suppliers.push(supplier);
  }
  localStorage["suppliers"] = JSON.stringify(suppliers);
}
