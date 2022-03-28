package com.springboot.springboot2.services;

import com.springboot.springboot2.entities.Supplier;

import java.util.List;

public interface ISupplierService {
    List<Supplier> getAll();

    Supplier getById(Long id);
    void remove(Long id);
    void save(Supplier employee);
}
