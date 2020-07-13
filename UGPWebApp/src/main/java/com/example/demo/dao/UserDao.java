package com.example.demo.dao;

import java.util.List;
import com.example.demo.entity.User;

public interface UserDao {
    List<User> findAll();
    void insertUser(User emp);
}
