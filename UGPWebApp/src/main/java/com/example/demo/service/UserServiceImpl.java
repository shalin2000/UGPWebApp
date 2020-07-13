package com.example.demo.service;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Component;
import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@Component
public class UserServiceImpl implements UserService{
    @Resource
    UserDao userDao; //User DataAccessObject (DAO) is being used here which has the Dao impl in Dao folder
    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }
    @Override
    public void insertUser(User emp) {
        userDao.insertUser(emp);

    }
}
