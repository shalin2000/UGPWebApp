package com.example.demo.controller;

import java.util.List;
import javax.annotation.Resource;

import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/postgressApp")
@CrossOrigin(origins="http://localhost:3000")
public class ApplicationController {
    @Resource
    UserService userService;
    @GetMapping(value = "/userList")
    public List<User> getUser() {
        return userService.findAll();
    }
    @PostMapping(value = "/createUser")
    public void createUser(@RequestBody User emp) {
        userService.insertUser(emp);
    }
    // @PutMapping(value = "/updateEmp")
    // public void updateEmployee(@RequestBody Employee emp) {
    //     employeeService.updateEmployee(emp);
    // }
    // @PutMapping(value = "/executeUpdateEmp")
    // public void executeUpdateEmployee(@RequestBody Employee emp) {
    //     employeeService.executeUpdateEmployee(emp);
    // }
    // @DeleteMapping(value = "/deleteEmpById")
    // public void deleteEmployee(@RequestBody Employee emp) {
    //     employeeService.deleteEmployee(emp);
    // }
}