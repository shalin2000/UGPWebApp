package com.example.demo.controller;

import java.util.List;
import javax.annotation.Resource;

import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/postgressApp")
@CrossOrigin(origins="http://localhost:3000")
public class ApplicationController {
    @Resource
    EmployeeService employeeService;
    @GetMapping(value = "/employeeList")
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }
    @PostMapping(value = "/createEmp")
    public void createEmployee(@RequestBody Employee emp) {
        employeeService.insertEmployee(emp);
    }
    @PutMapping(value = "/updateEmp")
    public void updateEmployee(@RequestBody Employee emp) {
        employeeService.updateEmployee(emp);
    }
    @PutMapping(value = "/executeUpdateEmp")
    public void executeUpdateEmployee(@RequestBody Employee emp) {
        employeeService.executeUpdateEmployee(emp);
    }
    @DeleteMapping(value = "/deleteEmpById")
    public void deleteEmployee(@RequestBody Employee emp) {
        employeeService.deleteEmployee(emp);
    }
}