package com.example.demo.entity;

public class Employee {

    String userComment;

    String crsTitle; 
    String crsNbr;
    String crsSubjCd;
    String profName;
    int easinessRating;
    int helpfulnessRating;
    int clarityRating;
    int workloadRating;
    int gradingRating;

    double totalStar;
    
    public double getTotalStar() {
        return totalStar;
    }
    public void setTotalStar(double d) {
        this.totalStar = d;
    }
    //////////////////////////////////////////////////////////////
    public int getEasinessRating() {
        return easinessRating;
    }
    public int getHelpfulnessRating() {
        return helpfulnessRating;
    }
    public int getClarityRating() {
        return clarityRating;
    }
    public int getWorkloadRating() {
        return workloadRating;
    }
    public int getGradingRating() {
        return gradingRating;
    }
    public void setEasinessRating(int easinessRating) {
        this.easinessRating = easinessRating;
    }
    public void setHelpfulnessRating(int helpfulnessRating) {
        this.helpfulnessRating = helpfulnessRating;
    }
    public void setClarityRating(int clarityRating) {
        this.clarityRating = clarityRating;
    }
    public void setWorkloadRating(int workloadRating) {
        this.workloadRating = workloadRating;
    }
    public void setGradingRating(int gradingRating) {
        this.gradingRating = gradingRating;
    }
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

}
