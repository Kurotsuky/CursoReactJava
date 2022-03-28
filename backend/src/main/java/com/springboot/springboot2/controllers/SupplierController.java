package com.springboot.springboot2.controllers;

import com.springboot.springboot2.entities.Supplier;
import com.springboot.springboot2.services.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    private ISupplierService service;

    @GetMapping("/api/suppliers")
    public List<Supplier> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/supplier/{id}")
    public Supplier getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/supplier/{id}")
    public void remove(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/suppliers")
    public void save(@RequestBody Supplier supplier) {
        service.save(supplier);
    }
}
