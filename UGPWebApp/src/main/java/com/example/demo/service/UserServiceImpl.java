package com.example.demo.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@Component
public class UserServiceImpl implements UserService{
    @Resource
    UserDao userDao;
    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }
    @Override
    public void insertUser(User emp) {
        userDao.insertUser(emp);

    }
    // @Override
    // public void updateEmployee(Employee emp) {
    //     employeeDao.updateEmployee(emp);

    // }
    // @Override
    // public void executeUpdateEmployee(Employee emp) {
    //     employeeDao.executeUpdateEmployee(emp);

    // }

    // @Override
    // public void deleteEmployee(Employee emp) {
    //     employeeDao.deleteEmployee(emp);

    // }
}
