package com.springboot.springboot2.services;

import com.springboot.springboot2.entities.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAll();

    Employee getById(Long id);
    void remove(Long id);
    void save(Employee employee);
}
