package com.example.demo.dao;

// import java.sql.PreparedStatement;
// import java.sql.SQLException;
// import java.util.HashMap;
import java.util.List;
// import java.util.Map;
// import org.springframework.dao.DataAccessException;
// import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserRowMapper;

@Repository
public class UserDaoImpl implements UserDao {

    public UserDaoImpl(NamedParameterJdbcTemplate template) {
        this.template = template;
    }

    NamedParameterJdbcTemplate template;

    @Override
    public List<User> findAll() {
        return template.query("select * from userReview", new UserRowMapper());
    }
    @Override
    public void insertEmployee(User emp) {
        emp.setTotalStar((emp.getEasinessRating()+emp.getHelpfulnessRating()+emp.getClarityRating()+emp.getWorkloadRating()+emp.getGradingRating()) / 5.0);
        final String sql = "insert into userReview(userComment,crsTitle,crsNbr,crsSubjCd,profName,easinessRating,helpfulnessRating,clarityRating,workloadRating,gradingRating,totalStar) values(:userComment,:crsTitle,:crsNbr,:crsSubjCd,:profName,:easinessRating,:helpfulnessRating,:clarityRating,:workloadRating,:gradingRating,:totalStar)";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
                .addValue("userComment", emp.getUserComment())
                .addValue("crsTitle", emp.getCrsTitle())
                .addValue("crsNbr", emp.getCrsNbr())
                .addValue("crsSubjCd", emp.getCrsSubjCd())
                .addValue("profName", emp.getProfName())
                .addValue("easinessRating", emp.getEasinessRating())
                .addValue("helpfulnessRating", emp.getHelpfulnessRating())
                .addValue("clarityRating", emp.getClarityRating())
                .addValue("workloadRating", emp.getWorkloadRating())
                .addValue("gradingRating", emp.getGradingRating())
                .addValue("totalStar", emp.getTotalStar());
        template.update(sql,param, holder);
    }
//     @Override
//     public void updateEmployee(Employee emp) {
//         final String sql = "update userReviews set userName=:userName, userComment=:userComment where userName=:userName";
//         KeyHolder holder = new GeneratedKeyHolder();
//         SqlParameterSource param = new MapSqlParameterSource()
// //                .addValue("userId", emp.getUserId())
//                 // .addValue("userName", emp.getUserName())
//                 .addValue("userComment", emp.getUserComment());
// //                .addValue("employeeAddress", emp.getEmployeeAddress());
//         template.update(sql,param, holder);
//     }
//     @Override
//     public void executeUpdateEmployee(Employee emp) {
//         final String sql = "update userReviews set userName=:userName, userComment=:userComment where userName=:userName";
//         Map<String,Object> map=new HashMap<String,Object>();
// //        map.put("userId", emp.getUserId());
//         // map.put("userName", emp.getUserName());
//         map.put("userComment", emp.getUserComment());
// //        map.put("employeeAddress", emp.getEmployeeAddress());
//         template.execute(sql,map,new PreparedStatementCallback<Object>() {
//             @Override
//             public Object doInPreparedStatement(PreparedStatement ps)
//                     throws SQLException, DataAccessException {
//                 return ps.executeUpdate();
//             }
//         });
//     }
//     @Override
//     public void deleteEmployee(Employee emp) {
//         final String sql = "delete from userReviews where userName=:userName";
//         Map<String,Object> map=new HashMap<String,Object>();
//         // map.put("userName", emp.getUserName());
//         template.execute(sql,map,new PreparedStatementCallback<Object>() {
//             @Override
//             public Object doInPreparedStatement(PreparedStatement ps)
//                     throws SQLException, DataAccessException {
//                 return ps.executeUpdate();
//             }
//         });
//     }
}
