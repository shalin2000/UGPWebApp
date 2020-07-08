package com.example.demo.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
import com.example.demo.entity.Employee;

public class EmployeeRowMapper implements RowMapper<Employee> {
    @Override
    public Employee mapRow(ResultSet rs, int arg1) throws SQLException {
        Employee emp = new Employee();
//        emp.setUserId(rs.getInt("userId"));
        emp.setUserName(rs.getString("userName"));
        emp.setUserComment(rs.getString("userComment"));
        emp.setCrsNbr(rs.getString("crsNbr"));
        emp.setCrsSubjCd(rs.getString("crsSubjCd"));
        emp.setCrsTitle(rs.getString("crsTitle"));
        emp.setProfName(rs.getString("profName"));
        return emp;
    }
}
