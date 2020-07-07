package com.example.demo.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;
import com.example.demo.mapper.EmployeeRowMapper;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

    public EmployeeDaoImpl(NamedParameterJdbcTemplate template) {
        this.template = template;
    }

    NamedParameterJdbcTemplate template;

    @Override
    public List<Employee> findAll() {
        return template.query("select * from userReviews", new EmployeeRowMapper());
    }
    @Override
    public void insertEmployee(Employee emp) {
        final String sql = "insert into userReviews(userName,userComment) values(:userName,:userComment)";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
//                .addValue("userID", emp.getId())
                .addValue("userName", emp.getUserName())
                .addValue("userComment", emp.getUserComment());
//                .addValue("employeeAddress", emp.getEmployeeAddress());
        template.update(sql,param, holder);
    }
    @Override
    public void updateEmployee(Employee emp) {
        final String sql = "update userReviews set userName=:userName, userComment=:userComment where userName=:userName";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
//                .addValue("userId", emp.getUserId())
                .addValue("userName", emp.getUserName())
                .addValue("userComment", emp.getUserComment());
//                .addValue("employeeAddress", emp.getEmployeeAddress());
        template.update(sql,param, holder);
    }
    @Override
    public void executeUpdateEmployee(Employee emp) {
        final String sql = "update userReviews set userName=:userName, userComment=:userComment where userName=:userName";
        Map<String,Object> map=new HashMap<String,Object>();
//        map.put("userId", emp.getUserId());
        map.put("userName", emp.getUserName());
        map.put("userComment", emp.getUserComment());
//        map.put("employeeAddress", emp.getEmployeeAddress());
        template.execute(sql,map,new PreparedStatementCallback<Object>() {
            @Override
            public Object doInPreparedStatement(PreparedStatement ps)
                    throws SQLException, DataAccessException {
                return ps.executeUpdate();
            }
        });
    }
    @Override
    public void deleteEmployee(Employee emp) {
        final String sql = "delete from userReviews where userName=:userName";
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("userName", emp.getUserName());
        template.execute(sql,map,new PreparedStatementCallback<Object>() {
            @Override
            public Object doInPreparedStatement(PreparedStatement ps)
                    throws SQLException, DataAccessException {
                return ps.executeUpdate();
            }
        });
    }
}
