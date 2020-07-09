package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.User;


public interface UserService {
    List<User> findAll();

    void insertEmployee(User emp);

    // void updateEmployee(Employee emp);

    // void executeUpdateEmployee(Employee emp);

    // void deleteEmployee(Employee emp);
}
