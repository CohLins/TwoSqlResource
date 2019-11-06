package com.example.demo.bean;

public class TbHazarduser {
    private String userId;

    private String userName;

    private String userAnalysis;

    private String userLevel;

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

    public String getUserAnalysis() {
        return userAnalysis;
    }

    public void setUserAnalysis(String userAnalysis) {
        this.userAnalysis = userAnalysis == null ? null : userAnalysis.trim();
    }

    public String getUserLevel() {
        return userLevel;
    }

    public void setUserLevel(String userLevel) {
        this.userLevel = userLevel == null ? null : userLevel.trim();
    }
}