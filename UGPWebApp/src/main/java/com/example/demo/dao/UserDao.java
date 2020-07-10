package com.example.demo.dao;

import java.util.List;
import com.example.demo.entity.User;

public interface UserDao {
    List<User> findAll();
    void insertUser(User emp);
    // void updateEmployee(Employee emp);
    // void executeUpdateEmployee(Employee emp);
    // public void deleteEmployee(Employee emp);
}
