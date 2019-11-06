package com.example.demo.bean;

public class TbKeyuser {
    private String userId;

    private String userName;

    private String userPhase;

    private String userGrade;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserPhase() {
        return userPhase;
    }

    public void setUserPhase(String userPhase) {
        this.userPhase = userPhase == null ? null : userPhase.trim();
    }

    public String getUserGrade() {
        return userGrade;
    }

    public void setUserGrade(String userGrade) {
        this.userGrade = userGrade == null ? null : userGrade.trim();
    }
}