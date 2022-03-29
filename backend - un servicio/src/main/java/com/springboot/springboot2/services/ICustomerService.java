package com.springboot.springboot2.services;

import com.springboot.springboot2.entities.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAll();

    Customer getById(Long id);
    void remove(Long id);
    void save(Customer customer);
}
