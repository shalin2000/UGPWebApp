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

    String crsTitle; 
    String crsNbr;
    String crsSubjCd;
    String profName;

    //////////////////////////////////////////////////////////////
    public String getCrsNbr() {
        return crsNbr;
    }
    public String getCrsSubjCd() {
        return crsSubjCd;
    }
    public String getCrsTitle() {
        return crsTitle;
    }
    public String getProfName() {
        return profName;
    }
    public void setCrsNbr(String crsNbr) {
        this.crsNbr = crsNbr;
    }
    public void setCrsSubjCd(String crsSubjCd) {
        this.crsSubjCd = crsSubjCd;
    }
    public void setCrsTitle(String crsTitle) {
        this.crsTitle = crsTitle;
    }
    public void setProfName(String profName) {
        this.profName = profName;
    }
    //////////////////////////////////////////////////////////////
    
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
