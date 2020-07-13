package com.example.demo.dao;

import java.util.List;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserRowMapper;

import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;

@Repository
public class UserDaoImpl implements UserDao {

    public UserDaoImpl(NamedParameterJdbcTemplate template) {
        this.template = template;
    }

    NamedParameterJdbcTemplate template;

    //get All
    @Override
    public List<User> findAll() {
        return template.query("select * from userReview", new UserRowMapper());
    }
    //insert a user(reviewer)
    @Override
    public void insertUser(User emp) {
        emp.setTotalStar((emp.getEasinessRating()+emp.getHelpfulnessRating()+emp.getClarityRating()+emp.getWorkloadRating()+emp.getGradingRating()) / 5.0);
        final String sql = "insert into userReview(userComment,crsTitle,crsNbr,crsSubjCd,profName,easinessRating,helpfulnessRating,clarityRating,workloadRating,gradingRating,totalStar,datePosted) values(:userComment,:crsTitle,:crsNbr,:crsSubjCd,:profName,:easinessRating,:helpfulnessRating,:clarityRating,:workloadRating,:gradingRating,:totalStar,:datePosted)";
        KeyHolder holder = new GeneratedKeyHolder();
        
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MM/dd/yyyy");  
        LocalDateTime now = LocalDateTime.now();
        emp.setDatePosted(dtf.format(now));
        
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
                .addValue("totalStar", emp.getTotalStar())
                .addValue("datePosted", emp.getDatePosted());
        template.update(sql,param, holder);
    }
}
