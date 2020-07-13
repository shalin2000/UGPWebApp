package com.example.demo.controller;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/postgressApp")
@CrossOrigin(origins="http://localhost:3000") //merge of two ports
public class ApplicationController {
    @Resource
    UserService userService;
    @GetMapping(value = "/userList") //getRequest
    public List<User> getUser() {
        return userService.findAll();
    }
    @PostMapping(value = "/createUser") //postRequest
    public void createUser(@RequestBody User emp) {
        userService.insertUser(emp);
    }
}