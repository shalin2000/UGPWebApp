package com.example.demo.entity;

// import javax.persistence.*;

//@Entity
//@Table(name = "testDB")
public class Employee {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

    String userName;
    String userComment;

    public String getUserComment() {
        return userComment;
    }
    public void setUserComment(String employeeComment) {
        this.userComment = employeeComment;
    }
//    public int getUserId() {
//        return userId;
//    }
//    public void setUserId(int userId) {
//        this.userId = userId;
//    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
}
