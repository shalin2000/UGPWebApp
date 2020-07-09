package com.example.demo.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
import com.example.demo.entity.Employee;

public class EmployeeRowMapper implements RowMapper<Employee> {
    @Override
    public Employee mapRow(ResultSet rs, int arg1) throws SQLException {
        Employee emp = new Employee();
        emp.setUserComment(rs.getString("userComment"));
        emp.setCrsNbr(rs.getString("crsNbr"));
        emp.setCrsSubjCd(rs.getString("crsSubjCd"));
        emp.setCrsTitle(rs.getString("crsTitle"));
        emp.setProfName(rs.getString("profName"));
        emp.setEasinessRating(rs.getInt("easinessRating"));
        emp.setHelpfulnessRating(rs.getInt("helpfulnessRating"));
        emp.setClarityRating(rs.getInt("clarityRating"));
        emp.setWorkloadRating(rs.getInt("workloadRating"));
        emp.setGradingRating(rs.getInt("gradingRating"));
        emp.setTotalStar(rs.getFloat("totalStar"));
        return emp;
    }
}
